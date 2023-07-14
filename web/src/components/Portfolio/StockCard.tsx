import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"
import DeleteStockModal from "./DeleteStockModal"
import { Trash } from "@phosphor-icons/react"
import { formataData } from "../../utils"

interface StockCardProps {
  codigo: string
  instituicao: string
  data_atualizacao: string
  preco: number
  quantidade: number
  valor_total: number
}

const StockCard = (props: StockCardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex flex-row divide-x-2 divide-[#01141f]">
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
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger
              className="hover:bg-gray-400 p-3 rounded-[50%]"
              title="Apagar Aplicação"
            >
              <Trash size={20} weight="bold" />
            </Dialog.Trigger>

            <DeleteStockModal codigo={props.codigo} />
          </Dialog.Root>
        </div>
      </div>
    </>
  )
}

export default StockCard
