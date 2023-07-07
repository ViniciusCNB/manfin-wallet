import axios from "axios"
import { Suspense, useEffect, useState, lazy } from "react"
import { AcaoProps } from "../types"
import StockCard from "./StockCard"
import  * as Dialog from "@radix-ui/react-dialog"
import AddInstitutionModal from "./AddInstitutionModal"
import { Link } from "react-router-dom"
import Chart from "react-apexcharts"

const LazyAddStockModal = lazy(() => import("./AddStockModal"))

const PortfolioBody = () => {
  const [acoes, setAcoes] = useState<AcaoProps[]>([])
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/acao/")
      .then((response) => response.data)
      .then((data) => setAcoes(data))
  }, [])

  const totalSharesValue = () => {
    let soma = 0
    acoes.map((acao) => {
      soma += acao.valor_total
    })
    return soma
  }

  const data_codigo: string[] = []
  const data_valor: number[] = []
  const data_inst: string[] = []
  const fillData = () => {
    acoes.map((acao: AcaoProps) => {
      data_codigo.push(acao.codigo)
      data_valor.push(acao.valor_total)
      data_inst.push(acao.instituicao)
    })
  }
  fillData()

  const nomes_inst: string[] = []
  const quantidades_inst: number[] = []
  const contaInstituicao = () => {
    const contagem: { [key: string]: number } = {}

    for (let i = 0; i < data_inst.length; i++) {
      const elemento = data_inst[i]
      if (contagem[elemento]) {
        contagem[elemento]++
      } else {
        contagem[elemento] = 1
      }
    }

    for (const nome in contagem) {
      // eslint-disable-next-line no-prototype-builtins
      if (contagem.hasOwnProperty(nome)) {
        nomes_inst.push(nome)
        quantidades_inst.push(contagem[nome])
      }
    }
  }
  contaInstituicao()

  const PieChartSeries = data_valor

  const PieChartOptions = {
    chart: {
      width: 380,
      id: "basic-pie",
    },
    labels: data_codigo,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  }

  const BarChartSeries = quantidades_inst

  const BarChartOptions = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    xaxis: {
      categories: nomes_inst,
    },
    colors: ["#00070b"],
    dataLabels: {
      enabled: true,
    },
  }

  console.log(nomes_inst)
  console.log(quantidades_inst)
  return (
    <>
      <div className="bg-[#eff3f6] w-screen h-screen flex flex-col">
        <div className="bg-[#01141f] w-full h-[15%] flex flex-row justify-between items-center p-4 shadow-md">
          <div className="flex items-center">
            <span className="text-[#eff3f6] text-[2.5rem] h-fit pr-6 border-r-2">
              ManFin Wallet
            </span>
            <Link
              to="/"
              className="bg-[#01141f] ml-6 font-normal text-[1.75rem] border-[1px] rounded-lg px-2 py-1 text-white hover:bg-[#012234]"
              title="Ir para a Home"
            >
              Home
            </Link>
          </div>
          <div className="text-[#eff3f6] text-[1.5rem] h-fit uppercase flex flex-row gap-2">
            <span>Total Investido:</span>
            <span>
              R${" "}
              {totalSharesValue().toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] pb-32">
          <div className="w-full h-[75%] flex flex-row p-6 gap-6">
            <div className="bg-gray-300 flex flex-col w-[25%] h-fit justify-center rounded-lg">
              <div className="bg-[#01141f] p-5 flex justify-center rounded-t-lg">
                <p className="uppercase text-xl text-white">
                  Operações disponíveis
                </p>
              </div>
              <div className="divide-y-[1px] divide-[#01141f]">
                <Dialog.Root open={open1} onOpenChange={setOpen1}>
                  <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase">
                    Adicionar nova instituição
                  </Dialog.Trigger>

                  <AddInstitutionModal />
                </Dialog.Root>

                <Dialog.Root open={open2} onOpenChange={setOpen2}>
                  <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase">
                    Adicionar nova aplicação
                  </Dialog.Trigger>

                  {open2 && (
                    <Suspense>
                      <LazyAddStockModal />
                    </Suspense>
                  )}
                </Dialog.Root>
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-center">
              <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
                <p className="uppercase text-xl text-white">
                  Aplicações Cadastradas
                </p>
              </div>
              <div className="bg-gray-300 h-96 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg">
                {acoes.map((acao) => {
                  return (
                    <StockCard
                      key={acao.codigo}
                      codigo={acao.codigo}
                      data_atualizacao={acao.data_atualizacao}
                      instituicao={acao.instituicao}
                      preco={acao.preco}
                      quantidade={acao.quantidade}
                      valor_total={acao.valor_total}
                    />
                  )
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-10 justify-center w-full h-fit p-6">
            <div className="flex flex-col text-center gap-10 bg-gray-300 rounded-lg py-5">
              <span className="uppercase text-xl text-[#01141f] font-bold">
                Distribuição por Instituição
              </span>
              <Chart
              type="bar"
              series={BarChartSeries}
              options={BarChartOptions}
              width={500}
              height={300}
            />
            </div>
            <div className="flex flex-col text-center gap-10 bg-gray-300 rounded-lg py-5">
              <span className="uppercase text-xl text-[#01141f] font-bold">
                Distribuição dos Ativos
              </span>
              <Chart
                type="pie"
                series={PieChartSeries}
                options={PieChartOptions}
                width={600}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioBody
