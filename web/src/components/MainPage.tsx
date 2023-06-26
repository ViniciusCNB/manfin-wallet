import { useEffect, useState } from "react"
import axios from "axios"
import StockCard from "./StockCard"
import { AcaoProps } from "../types"
import Operations from "./Operations"
import Chart from "./Chart"

const MainPage = () => {
  const [acoes, setAcoes] = useState<AcaoProps[]>([])

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

  return (
    <>
      <div className="bg-gradient-to-l from-[#204662] to-[#102533] h-fit max-h-max w-full py-14 px-5 flex flex-col gap-32">
        <div className="grid grid-cols-2 gap-20 items-center text-center">
          <div className="text-white text-[1.5rem]">
            <p>
              Realize operações na sua carteira com as opções ao lado.
              <br />
              Adicione uma nova instituição financeira para que, dessa forma,
              seja possível adicionar novas aplicações.
            </p>
          </div>
          <Operations />
        </div>
        <div className="grid h-full grid-cols-2 items-center">
          <div className="w-full h-full flex flex-col justify-center">
            <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
              <p className="uppercase text-xl text-white">
                Aplicações Cadastradas
              </p>
            </div>
            <div className="bg-gray-200/80 h-96 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg">
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
            <div className="bg-[#01141f] mt-2 py-3 px-4 flex justify-between rounded-lg uppercase text-2xl text-white">
              <p>Total Investido</p>
              <p>R$ {totalSharesValue().toFixed(2)}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Chart acoes={acoes} />
            <div className="flex text-center text-white text-2xl uppercase">
              <p>Distribuição dos Ativos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
