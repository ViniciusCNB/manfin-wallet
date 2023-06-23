import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useForm } from "react-hook-form"

const AddInstitutionModal = () => {
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: any) => {
    try {
      await axios
        .post("http://127.0.0.1:8000/instituicao/", data)
        .then((response) => response.data)
        .then((data) =>
          alert(`Instituição ${data.nome} adicionada com sucesso.`)
        )
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

        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[18rem] shadow-lg shadow-black/25">
          <Dialog.Title className="uppercasepy-2 text-2xl text-center font-extrabold mb-10">
            Adicionar Nova Instituição
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  NOME
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("nome", { required: true })}
                />
              </div>
            </div>

            <button className="bg-blue-500 text-base font-bold rounded-md p-3 text-white hover:bg-blue-700 shadow-md shadow-black/25 absolute right-0">
              ADD
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

export default AddInstitutionModal
