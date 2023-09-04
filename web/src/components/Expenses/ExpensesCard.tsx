import { useEffect, useState } from "react"
import { formataData } from "../../utils"
import axios from "axios"

interface ExpensesCardProps {
  descricao: string
  data: string
  valor: number
  forma_pagamento: number
  categoria: number
  observacao: string
}

const ExpenseCard = (props: ExpensesCardProps) => {
  const [categoria, setCategoria] = useState()
  const [formaPagamento, setFormaPagamento] = useState()

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/categoria/${props.categoria}/`)
      .then((response) => response.data)
      .then((data) => setCategoria(data))
  }, [props.categoria])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/forma-pagamento/${props.forma_pagamento}/`)
      .then((response) => response.data)
      .then((data) => setFormaPagamento(data))
  }, [props.forma_pagamento])

  return (
    <>
      <div className="w-full grid grid-cols-6 py-2 text-center divide-x-2 divide-[#187c44]">
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Data</span> <br />
            {formataData(props.data)}
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Categoria</span> <br />
            {categoria === undefined ? "" : categoria["descricao"]}
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
            {formaPagamento === undefined ? "" : formaPagamento["descricao"]}
          </p>
        </div>
        <div className="flex justify-center">
          <p>
            <span className="font-bold text-[#187c44]">Observação</span> <br />
            {props.observacao}
          </p>
        </div>
      </div>
    </>
  )
}

export default ExpenseCard
