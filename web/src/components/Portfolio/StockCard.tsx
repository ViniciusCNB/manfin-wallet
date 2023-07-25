import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import DeleteStockModal from "./DeleteStockModal"
import { PlusCircle, Trash } from "@phosphor-icons/react"
import { formataData } from "../../utils"
import AddApplicationModal from "./AddApplicationModal"
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
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)

  return (
    <>
      <Link to={`/portfolio/${props.codigo}`} className="flex flex-row divide-x-2 divide-[#01141f] hover:bg-gray-400/50">
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
        <div className="flex justify-center items-center my-2 px-4">
          <Dialog.Root open={open1} onOpenChange={setOpen1}>
            <Dialog.Trigger
              className="hover:bg-gray-400 p-3 rounded-[50%]"
              title="Nova Aplicação"
            >
              <PlusCircle size={25} weight="fill" />
            </Dialog.Trigger>

            <AddApplicationModal codigo={props.codigo} instituicao={props.instituicao} />
          </Dialog.Root>
          <Dialog.Root open={open2} onOpenChange={setOpen2}>
            <Dialog.Trigger
              className="hover:bg-gray-400 p-3 rounded-[50%]"
              title="Apagar Aplicação"
            >
              <Trash size={20} weight="bold" />
            </Dialog.Trigger>

            <DeleteStockModal codigo={props.codigo} />
          </Dialog.Root>
        </div>
      </Link>
    </>
  )
}

export default StockCard
