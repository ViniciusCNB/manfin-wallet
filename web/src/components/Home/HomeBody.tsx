import { AcaoProps } from "../../types"
import Chart from "react-apexcharts"
import { Link } from "react-router-dom"
import { formataData, totalSharesValue } from "../../utils"

const HomeBody = () => {
  const data: AcaoProps[] = [
    {
      codigo: "BBAS3",
      data_atualizacao: "2023-03-15",
      instituicao: "RICO",
      preco: 41.58,
      quantidade: 100,
      valor_total: 4158,
    },
    {
      codigo: "PETR4",
      data_atualizacao: "2022-10-25",
      instituicao: "RICO",
      preco: 29.53,
      quantidade: 30,
      valor_total: 885.9,
    },
    {
      codigo: "VALE3",
      data_atualizacao: "2022-05-03",
      instituicao: "RICO",
      preco: 64.23,
      quantidade: 50,
      valor_total: 3211.5,
    },
    {
      codigo: "CASH3",
      data_atualizacao: "2021-02-15",
      instituicao: "RICO",
      preco: 8.8,
      quantidade: 10,
      valor_total: 88.0,
    },
    {
      codigo: "MXRF11",
      data_atualizacao: "2020-12-10",
      instituicao: "RICO",
      preco: 10.07,
      quantidade: 30,
      valor_total: 302.1,
    },
  ]

  const PieChartSeries = data.map((acao) => {
    return acao.valor_total
  })

  const PieChartOptions = {
    chart: {
      id: "basic-pie",
    },
    labels: data.map((acao) => {
      return acao.codigo
    }),
    legend: {
      labels: {
        colors: "#fff",
        useSeriesColors: true
      }
    },
  }

  return (
    <>
      <div className="bg-white h-fit max-h-max w-full flex flex-row">
        <div className="flex flex-col w-1/2 gap-20 p-10 bg-gradient-to-l from-[#204662] to-[#102533]">
          <div className="uppercase text-4xl text-white text-center">
            <span className="border-b-2">Portfólio de Investimentos</span>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} Realize operações na sua carteira como adicionar um novo
              ativo ou uma nova aplicação.
              <br />
              {">"}
              {">"} Adicione uma nova instituição financeira para que, dessa
              forma, seja possível adicionar novas aplicações.
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
              <p className="uppercase text-xl text-white">
                Aplicações Cadastradas
              </p>
            </div>
            <div className="bg-gray-200/80 h-fit overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg">
              {data.map((acao) => {
                return (
                  <div className="w-full grid grid-cols-6 py-2 text-center divide-x-2 divide-[#01141f]">
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">Ativo</span>{" "}
                        <br />
                        {acao.codigo}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Data da Compra
                        </span>
                        <br /> {formataData(acao.data_atualizacao)}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Instituição
                        </span>{" "}
                        <br />
                        {acao.instituicao}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">Preço</span>{" "}
                        <br /> R${" "}
                        {acao.preco.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Quantidade
                        </span>{" "}
                        <br />
                        {acao.quantidade}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Saldo Atual
                        </span>{" "}
                        <br />
                        R${" "}
                        {acao.valor_total.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="bg-[#01141f] mt-2 py-3 px-4 flex justify-between rounded-lg uppercase text-2xl text-white">
              <p>Total Investido</p>
              <p>
                R${" "}
                {totalSharesValue(data).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} As aplicações cadastradas aparecerão em uma tabela como a de
              cima, exibindo assim todos os dados fornecidos no momento da
              operação de registro da aplicação.
              <br />
              {">"}
              {">"} Além disso, é possível visualizar também o valor total
              investido pelo usuário.
            </p>
          </div>
          <div className="flex flex-col text-center gap-8 items-center">
            <Chart
              type="pie"
              series={PieChartSeries}
              options={PieChartOptions}
              width={500}
              height={300}
            />
            <span className="text-white text-2xl uppercase">
              Distribuição dos Ativos
            </span>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} O software também conta com uma exibição dinâmica dos dados
              fornecidos.
              <br />
              {">"}
              {">"} Por exemplo, com o gráfico ao lado, é possível visualizar a
              influência que cada ativo exerce em sua carteira, tornando
              possível uma análise mais assertiva e concreta acerca do seu
              patrimônio.
              <br />
              {">"}
              {">"} Note que, com o ponteiro do mouse, você é capaz de
              identificar os ativos em cada porção do gráfico.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/portfolio"
              className="bg-[#01141f] p-4 uppercase rounded-lg text-white text-2xl border-2 hover:bg-[#01141f]/50"
            >
              Ir para o portfólio
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#58c989] to-[#1d9b53] w-1/2 p-10">
          <div className="uppercase text-4xl text-white text-center">
            <span className="border-b-2">Gestão de Despesas</span>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/despesas"
              className="bg-[#187c44] p-4 uppercase rounded-lg text-white text-2xl border-2 hover:bg-[#255c3d]"
            >
              Ir para o gestor
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBody
