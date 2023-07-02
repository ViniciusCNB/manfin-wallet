import StockCard from "./StockCard"
import { AcaoProps } from "../types"
import Chart from "./Chart"
import { Link } from "react-router-dom"

const HomeBody = () => {
  const totalSharesValue = () => {
    let soma = 0
    data.map((acao) => {
      soma += acao.valor_total
    })
    return soma
  }

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

  return (
    <>
      <div className="bg-gradient-to-l from-[#204662] to-[#102533] h-fit max-h-max w-full py-14 px-5 flex flex-col gap-28">
        <div className="grid grid-cols-2 gap-20 items-center text-right">
          <div className="text-white text-[1.5rem]">
            <p>
              {">"}
              {">"} Realize operações na sua carteira com as opções ao lado.
              <br />
              {">"}
              {">"} Adicione uma nova instituição financeira para que, dessa
              forma, seja possível adicionar novas aplicações.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-[#01141f]/50 border-4 flex flex-col w-[60%] h-fit justify-center">
              <div className="bg-[#01141f] p-5 flex justify-center border-[1px]">
                <p className="uppercase font-bold text-xl text-white">
                  Operações disponíveis
                </p>
              </div>
              <div className="divide-y-[1px] divide-[#01141f]">
                <div className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-white">
                  Adicionar nova instituição
                </div>

                <div className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-white">
                  Adicionar nova aplicação
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-full grid-cols-2 text-left gap-20 items-center">
          <div className="w-full h-full flex flex-col justify-center">
            <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
              <p className="uppercase text-xl text-white">
                Aplicações Cadastradas
              </p>
            </div>
            <div className="bg-gray-200/80 h-96 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg">
              {data.map((acao) => {
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
            <div className="bg-[#01141f] mt-2 py-3 px-4 flex justify-between rounded-lg uppercase text-2xl text-white">
              <p>Total Investido</p>
              <p>
                R${" "}
                {totalSharesValue().toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="text-white text-[1.5rem]">
            <p>
              {">"}
              {">"} As aplicações cadastradas aparecerão na tabela ao lado,
              exibindo assim todos os dados fornecidos no momento da operação de
              registro da aplicação.
              <br />
              {">"}
              {">"} Além disso, ao final da tabela, é mostrado o valor total
              investido pelo usuário.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-20 items-center text-right">
          <div className="text-white text-[1.5rem]">
            <p>
              {">"}
              {">"} O nosso software também conta com uma exibição dinâmica dos
              dados fornecidos.
              <br />
              {">"}
              {">"} Por exemplo, com o gráfico ao lado, é possível visualizar a
              influencia que cada ativo exerce em sua carteira, tornando
              possível uma análise mais assertiva e concreta acerca do seu
              patrimônio.
              <br />
              {">"}
              {">"} Note que, com o ponteiro do mouse, você é capaz de
              identificar os ativos em cada porção do gráfico.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Chart acoes={data} />
            <div className="flex text-center text-white text-2xl uppercase">
              <p>Distribuição dos Ativos</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/portfolio"
            className="bg-[#01141f] p-4 uppercase rounded-lg text-white text-2xl border-2 hover:bg-[#01141f]/50"
          >
            Ir para a aplicação
          </Link>
        </div>
      </div>
    </>
  )
}

export default HomeBody
