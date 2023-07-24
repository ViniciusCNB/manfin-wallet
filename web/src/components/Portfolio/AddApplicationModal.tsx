import { Plus } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useForm } from "react-hook-form"

interface AddApplicationModalProps {
  codigo: string
  instituicao: string
}

const AddApplicationModal = (props: AddApplicationModalProps) => {
  const { register, handleSubmit, reset } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const editData = {
      ...data,
      codigo: props.codigo,
      instituicao: props.instituicao
    }
    try {
      await axios
        .put(`http://127.0.0.1:8000/acao/${props.codigo}/`, editData)
        .then((response) => response.data)
        .then(() =>
          alert(`Aplicação adicionada com sucesso.`)
        )
        .then(() => window.location.reload())
    } catch (error) {
      throw new Error(`Erro no back-end!\n${error}`)
    } finally {
      reset()
    }
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#194762]/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[31rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-[#01141f] rounded-lg uppercase py-4 text-2xl text-center font-extrabold mb-10 shadow-lg shadow-black/25">
            Nova Aplicação do Ativo {props.codigo}
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  DATA DA APLICAÇÃO
                </label>
                <input
                  type="date"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("data_atualizacao", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  PREÇO UNITÁRIO
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("preco", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  QUANTIDADE
                </label>
                <input
                  type="number"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("quantidade", { required: true })}
                />
              </div>
            </div>

            <button className="bg-[#01141f] text-base font-bold rounded-md p-3 text-white hover:bg-[#01141f]/50 shadow-md shadow-black/25 absolute right-0">
              <Plus size={25} weight="fill" />
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

export default AddApplicationModal
