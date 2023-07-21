import { Suspense, useEffect, useState, lazy } from "react"
import axios from "axios"
import * as Dialog from "@radix-ui/react-dialog"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Link } from "react-router-dom"
import Chart from "react-apexcharts"
import { AcaoProps } from "../../types"
import {
  compararPorDataAtualizacao,
  compararPorValorTotal,
  contaInstituicao,
  fillData,
  totalSharesValue,
} from "../../utils"
import StockCard from "./StockCard"
import AddInstitutionModal from "./AddInstitutionModal"
import { DotsThreeOutlineVertical, House } from "@phosphor-icons/react"

const LazyAddStockModal = lazy(() => import("./AddStockModal"))

const PortfolioBody = () => {
  const [acoes, setAcoes] = useState<AcaoProps[]>([])
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const evoPatrimonio = () => {
    let acumulado = 0
    const historico: number[] = []
    acoes
      .slice()
      .sort(compararPorDataAtualizacao)
      .map((acao) => {
        acumulado += acao.valor_total
        historico.push(acumulado)
      })
    return historico
  }

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/acao/")
      .then((response) => response.data)
      .then((data) => setAcoes(data))
  }, [])

  const data_inst: string[] = []
  fillData(acoes, data_inst)

  const nomes_inst: string[] = []
  const quantidades_inst: number[] = []
  contaInstituicao(data_inst, nomes_inst, quantidades_inst)

  const PieChartSeries = acoes.map((acao) => acao.valor_total)

  const PieChartOptions = {
    chart: {
      id: "basic-pie",
    },
    labels: acoes.map((acao) => acao.codigo),
    legend: {
      labels: {
        colors: "#fff",
        useSeriesColors: true,
      },
    },
  }

  const BarChartSeries = [
    {
      name: "Quantidade de ativos",
      data: quantidades_inst,
    },
  ]

  const BarChartOptions = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        horizontal: true,
        barHeight: "50%",
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

  const AreaChartSeries = [
    {
      name: "Patrimônio",
      data: evoPatrimonio(),
    },
  ]

  const AreaChartOptions = {
    chart: {
      id: "basic-area",
    },
    labels: acoes
      .slice()
      .sort(compararPorDataAtualizacao)
      .map((acao) => {
        const data = new Date(acao.data_atualizacao)
        const dataFormatada = data.toLocaleDateString("pt-BR")
        return dataFormatada
      }),
  }

  return (
    <>
      <div className="bg-[#eff3f6] w-screen h-screen flex flex-col relative">
        <div className="bg-[#01141f] w-full h-[15%] flex flex-row justify-between items-center p-4 shadow-lg shadow-black/20">
          <div className="flex items-center">
            <span className="text-[#eff3f6] text-[2.5rem] h-fit pr-6 border-r-2">
              ManFin Wallet
            </span>
            <span className="text-[#eff3f6] ml-6 text-[2.5rem]">Portfólio</span>
          </div>
          <div className="text-[#eff3f6] text-[1.5rem] h-fit uppercase flex flex-row gap-2">
            <span>Total Investido:</span>
            <span>
              R${" "}
              {totalSharesValue(acoes).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] pb-32">
          <div className="w-full h-[75%] flex flex-row p-6 gap-6">
            <div className="w-full h-full flex flex-col justify-center">
              <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
                <p className="uppercase text-xl text-white">
                  Aplicações Cadastradas
                </p>
              </div>
              <div className="bg-gray-300 h-96 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg">
                {acoes
                  .slice()
                  .sort(compararPorValorTotal)
                  .map((acao) => {
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
          <div className="grid grid-cols-2 gap-10 justify-start w-full h-fit p-6">
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
            <div className="flex flex-col text-center gap-10 bg-gray-300 rounded-lg py-5 z-0">
              <span className="uppercase text-xl text-[#01141f] font-bold">
                Evolução do Patrimônio
              </span>
              <Chart
                type="area"
                series={AreaChartSeries}
                options={AreaChartOptions}
                height={300}
              />
            </div>
            <div className="flex flex-col h-fit w-fit text-center gap-10 bg-gray-300 rounded-lg py-5 px-7 self-center z-0">
              <span className="uppercase text-xl text-[#01141f] font-bold">
                Distribuição por Instituição
              </span>
              <Chart
                type="bar"
                series={BarChartSeries}
                options={BarChartOptions}
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            className="bg-[#01141f] absolute bottom-2 right-4 p-3 rounded-[50%] hover:bg-[#012234] shadow-lg shadow-black/20"
            title="Exibir opções"
          >
            <DotsThreeOutlineVertical size={20} color="white" weight="fill" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              side="left"
              sideOffset={10}
              className="bg-gray-300 rounded-lg mb-2 border-[#01141f] border-2"
            >
              <div className="bg-[#01141f] p-5 flex justify-center">
                <p className="uppercase text-white text-base">
                  Operações disponíveis
                </p>
              </div>
              <DropdownMenu.Item>
                <div className="bg-gray-300 rounded-lg divide-y-[1px] divide-[#01141f]">
                  <Dialog.Root open={open1} onOpenChange={setOpen1}>
                    <Dialog.Trigger
                      className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                      title="Cadastro de uma nova instituição"
                    >
                      Adicionar nova instituição
                    </Dialog.Trigger>

                    <AddInstitutionModal />
                  </Dialog.Root>

                  <Dialog.Root open={open2} onOpenChange={setOpen2}>
                    <Dialog.Trigger
                      className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                      title="Cadastro de um novo ativo"
                    >
                      Adicionar novo ativo
                    </Dialog.Trigger>

                    {open2 && (
                      <Suspense>
                        <LazyAddStockModal />
                      </Suspense>
                    )}
                  </Dialog.Root>

                  <Dialog.Root open={open3} onOpenChange={setOpen3}>
                    <Dialog.Trigger
                      className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm rounded-b-lg"
                      title="Nova aplicação de um ativo existente"
                    >
                      Adicionar nova aplicação
                    </Dialog.Trigger>
                  </Dialog.Root>
                </div>
              </DropdownMenu.Item>
              <DropdownMenu.Arrow />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <Link
          to="/"
          className="bg-[#01141f] absolute bottom-16 right-4 p-3 rounded-[50%] hover:bg-[#012234] shadow-lg shadow-black/20"
          title="Ir para a Home"
        >
          <House size={20} color="white" weight="fill" />
        </Link>
      </div>
    </>
  )
}

export default PortfolioBody
