import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Plus } from "@phosphor-icons/react"

const AddExpenseModal = () => {
  const { register, handleSubmit, reset } = useForm()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const editData = {
      ...data,
      valor: data["valor"].replace(/,/g, "."),
    }

    try {
      await axios
        .post("http://127.0.0.1:8000/despesa/", editData)
        .then((response) => response.data)
        .then(() => alert(`Despesa adicionada com sucesso.`))
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

        <Dialog.Content className="fixed bg-[#bdbdbd]/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[36rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-[#187c44] rounded-lg uppercase py-4 text-2xl text-center font-extrabold mb-10 shadow-lg shadow-black/25">
            Adicionar Nova Despesa
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px] text-[#187c44] uppercase">
                  Descrição
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("descricao", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px] text-[#187c44] uppercase">
                  Data
                </label>
                <input
                  type="date"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("data", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px] text-[#187c44] uppercase">
                  Valor
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("valor", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px] text-[#187c44] uppercase">
                  Pagamento
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("pagamento", { required: true })}
                />
              </div>
            </div>

            <button className="bg-[#187c44] text-base font-bold rounded-md p-3 text-white hover:bg-[#187c44]/50 shadow-md shadow-black/25 absolute right-0">
              <Plus size={25} weight="fill" />
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

export default AddExpenseModal
