import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"

interface DeleteCategoryModalProps {
  id: number
  descricao: string
}

const DeleteCategoryModal = (props: DeleteCategoryModalProps) => {
  const handleClick = async () => {
    await axios
      .delete(`http://127.0.0.1:8000/categoria/${props.id}/`)
      .then(() => alert("Categoria excluída."))
      .then(() => window.location.reload())
  }

  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#bbbbbb] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[14rem] shadow-lg shadow-black/25 overflow-auto">
          <Dialog.Title className="text-[#187c44] uppercase font-bold text-center text-2xl font-serif p-2 border-[3px] border-[#187c44] mb-10">
            Deseja Deletar a Categoria: {props.descricao}?
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-5">
            <button
              className="rounded bg-[#187c44] mt-3 py-2 px-3 text-white hover:bg-[#187c44]/50 font-bold text-xl shadow-md shadow-black/25"
              onClick={handleClick}
            >
              CONFIRMAR
            </button>

            <Dialog.Close className="rounded bg-gray-700 mt-3 py-2 px-3 text-white hover:bg-gray-500 font-bold text-xl shadow-md shadow-black/25">
              CANCELAR
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  )
}

export default DeleteCategoryModal