import { DespesaProps } from "../../types"
import ExpenseCard from "./ExpensesCard"

interface ExpensesTableProps {
  despesas: DespesaProps[]
}

const ExpensesTable = (props: ExpensesTableProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="bg-[#187c44] p-5 rounded-t-lg flex justify-center">
          <p className="uppercase text-xl text-white">Histórico de despesas</p>
        </div>
        <div className="bg-gray-300 h-full overflow-auto scrollbar-thin scrollbar-thumb-[#187c44] divide-y-[1px] divide-green-700 rounded-b-lg shadow-black/25 shadow-inner">
          {props.despesas.map((despesa) => {
            return (
              <ExpenseCard
                key={despesa.id}
                descricao={despesa.descricao}
                data={despesa.data}
                valor={despesa.valor}
                pagamento={despesa.pagamento}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ExpensesTable
