import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import AddInstitutionModal from "./AddInstitutionModal"
import AddStockModal from "./AddStockModal"

const Operations = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  
  return (
    <div className="bg-gray-200/80 flex flex-col   h-fit justify-center rounded-lg">
      <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
        <p className="uppercase text-xl text-white">Operações disponíveis</p>
      </div>
      <div className="divide-y-[1px] divide-[#01141f]">
        <Dialog.Root open={open1} onOpenChange={setOpen1}>
          <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-start p-4 uppercase">
            Adicionar nova instituição
          </Dialog.Trigger>

          <AddInstitutionModal />
        </Dialog.Root>

        <Dialog.Root open={open2} onOpenChange={setOpen2}>
          <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-start p-4 uppercase">
            Adicionar nova aplicação
          </Dialog.Trigger>

          <AddStockModal />
        </Dialog.Root>
      </div>
    </div>
  )
}

export default Operations
