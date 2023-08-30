import { formataData } from "../../utils"

interface ExpensesCardProps {
  descricao: string
  data: string
  valor: number
  pagamento: string
  categoria: string
}

const ExpenseCard = (props: ExpensesCardProps) => {
  return (
    <>
      <div className="w-full grid grid-cols-5 py-2 text-center divide-x-2 divide-[#187c44]">
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Data</span> <br />
            {formataData(props.data)}
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Categoria</span> <br />
            {props.categoria}
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Descrição</span> <br />
            {props.descricao}
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Valor</span> <br /> R${" "}
            {props.valor.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Forma de Pagamento</span>{" "}
            <br />
            {props.pagamento}
          </p>
        </div>
      </div>
    </>
  )
}

export default ExpenseCard
