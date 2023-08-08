import * as Dialog from "@radix-ui/react-dialog"
import { useNavigate } from "react-router-dom"
import axios from "axios"

interface DeleteStockModalProps {
  codigo: string
}

const DeleteStockModal = (props: DeleteStockModalProps) => {
  const navigate = useNavigate()

  const handleClick = async () => {
    await axios
      .delete(`http://localhost:8000/acao/${props.codigo}`)
      .then(() => navigate("/portfolio"))
      .then(() => window.location.reload())
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#194762]/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[15rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-[#01141f] rounded-lg uppercase py-4 text-2xl text-center font-extrabold mb-14 shadow-lg shadow-black/25">
            Deletar {props.codigo}?
          </Dialog.Title>
          <div className="grid grid-cols-2 gap-5">
            <button
              className="rounded bg-red-500 mt-3 py-2 px-3 text-white hover:bg-red-700 font-bold text-lg uppercase"
              onClick={handleClick}
            >
              Deletar
            </button>

            <Dialog.Close className="rounded bg-gray-800 mt-3 py-2 px-3 text-white hover:bg-slate-600 font-bold text-lg uppercase">
              Cancelar
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

export default DeleteStockModal
