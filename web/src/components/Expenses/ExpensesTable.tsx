import { DespesaProps } from "../../types"
import ExpenseCard from "./ExpensesCard"

interface ExpensesTableProps {
  despesas: DespesaProps[]
}

const ExpensesTable = (props: ExpensesTableProps) => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center">
        <div className="bg-[#323e51] p-3 rounded-t-lg flex justify-center">
          <p className="uppercase text-xl text-white">Histórico de despesas</p>
        </div>
        <div className="bg-gray-300 h-full overflow-auto scrollbar-thin scrollbar-thumb-[#323e51] divide-y-[1px] divide-[#323e51] rounded-b-lg shadow-black/25 shadow-inner">
          {props.despesas.length === 0 ? (
            <div className="flex justify-center items-center text-black text-4xl w-full h-full">
              Não há despesas cadastradas.
            </div>
          ) : (
            props.despesas.map((despesa) => {
              return (
                <ExpenseCard
                  key={despesa.id}
                  descricao={despesa.descricao}
                  data={despesa.data}
                  valor={despesa.valor}
                  forma_pagamento={despesa.forma_pagamento}
                  categoria={despesa.categoria}
                  observacao={despesa.observacao}
                />
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

export default ExpensesTable
