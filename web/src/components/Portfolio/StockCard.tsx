import { formataData } from "../../utils"
import { Link } from "react-router-dom"

interface StockCardProps {
  codigo: string
  instituicao: string
  data_atualizacao: string
  preco: number
  quantidade: number
  valor_total: number
}

const StockCard = (props: StockCardProps) => {
  return (
    <>
      <Link
        to={`/portfolio/${props.codigo}`}
        className="flex flex-row divide-x-2 divide-[#01141f] hover:bg-gray-400/50"
      >
        <div className="w-full grid grid-cols-6 py-2 text-center divide-x-2 divide-[#01141f]">
          <div className="flex justify-center">
            <p>
              <span className="font-bold text-[#01141f]">Ativo</span> <br />
              {props.codigo}
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              <span className="font-bold text-[#01141f]">Data da Compra</span>
              <br /> {formataData(props.data_atualizacao)}
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              <span className="font-bold text-[#01141f]">Instituição</span>{" "}
              <br />
              {props.instituicao}
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              <span className="font-bold text-[#01141f]">Preço</span> <br /> R${" "}
              {props.preco.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              <span className="font-bold text-[#01141f]">Quantidade</span>{" "}
              <br />
              {props.quantidade}
            </p>
          </div>
          <div className="flex justify-center">
            <p>
              <span className="font-bold text-[#01141f]">Saldo Atual</span>{" "}
              <br />
              R${" "}
              {props.valor_total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default StockCard
