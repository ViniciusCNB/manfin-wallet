import { AcaoProps } from "../../types"
import { compararPorValorTotal } from "../../utils"
import StockCard from "./StockCard"

interface ApplicationsTableProps {
  acoes: AcaoProps[]
}

const ApplicationsTable = (props: ApplicationsTableProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
          <p className="uppercase text-xl text-white">Aplicações Cadastradas</p>
        </div>
        <div className="bg-gray-300 h-96 overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg shadow-black/25 shadow-inner">
          {props.acoes
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
    </>
  )
}

export default ApplicationsTable
