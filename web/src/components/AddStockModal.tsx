import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const AddStockModal = () => {
  const [instituicoes, setInstituicoes] = useState([])
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data: unknown) => {
    try {
      await axios
        .post("http://127.0.0.1:8000/acao/", data)
        .then((response) => response.data)
        .then((data) =>
          alert(`Ação ${data.codigo} adicionada com sucesso.`)
        )
        .then(() => window.location.reload())
    } catch (error) {
      throw new Error(`Erro no back-end!\n${error}`)
    } finally {
      reset()
    }
  }

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/instituicao/")
      .then((response) => response.data)
      .then((data) => setInstituicoes(data))
  }, [])

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-slate-400/90 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[40rem] shadow-lg shadow-black/25">
          <Dialog.Title className="uppercasepy-2 text-2xl text-center font-extrabold mb-10">
            Adicionar Nova Ação
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  CÓDIGO
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("codigo", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label htmlFor="" className="font-bold text-[16px]">
                  INSTITUIÇÃO
                </label>
                <select
                  {...register("instituicao", { required: true })}
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                >
                  <option value=""></option>
                  {instituicoes.map((inst) => (
                    <option key={inst["nome"]} value={inst["nome"]}>
                      {inst["nome"]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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

            <button className="bg-blue-500 text-base font-bold rounded-md p-3 text-white hover:bg-blue-700 shadow-md shadow-black/25 absolute right-0">
              ADD
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

export default AddStockModal
