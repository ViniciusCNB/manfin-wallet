import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Plus } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

const AddExpenseModal = () => {
  const { register, handleSubmit, reset } = useForm()
  const [categorias, setCategorias] = useState([])
  const [formasPagamento, setFormasPagamento] = useState([])

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

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/categoria/")
      .then((response) => response.data)
      .then((data) => setCategorias(data))
  }, [])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/forma-pagamento/")
      .then((response) => response.data)
      .then((data) => setFormasPagamento(data))
  }, [])

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

        <Dialog.Content className="fixed bg-[#bbbbbb] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-[48rem] shadow-lg shadow-black/25">
          <Dialog.Title className="bg-[#187c44] rounded-lg uppercase py-4 text-2xl text-center font-extrabold mb-10 shadow-lg shadow-black/25">
            Adicionar Nova Despesa
          </Dialog.Title>

          <form onSubmit={handleSubmit(onSubmit)} className="relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor=""
                  className="font-bold text-[16px] text-[#187c44] uppercase"
                >
                  CATEGORIA
                </label>
                <select
                  {...register("categoria", { required: true })}
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                >
                  <option value=""></option>
                  {categorias.map((categoria) => (
                    <option key={categoria["id"]} value={categoria["id"]}>
                      {categoria["descricao"]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor=""
                  className="font-bold text-[16px] text-[#187c44] uppercase"
                >
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
                <label
                  htmlFor=""
                  className="font-bold text-[16px] text-[#187c44] uppercase"
                >
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
                <label
                  htmlFor=""
                  className="font-bold text-[16px] text-[#187c44] uppercase"
                >
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
                <label
                  htmlFor=""
                  className="font-bold text-[16px] text-[#187c44] uppercase"
                >
                  Forma de Pagamento
                </label>
                <select
                  {...register("forma_pagamento", { required: true })}
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                >
                  <option value=""></option>
                  {formasPagamento.map((forma_pagamento) => (
                    <option key={forma_pagamento["id"]} value={forma_pagamento["id"]}>
                      {forma_pagamento["descricao"]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor=""
                  className="font-bold text-[16px] text-[#187c44] uppercase"
                >
                  Observação (opcional)
                </label>
                <input
                  type="text"
                  className="bg-gray-200 text-black rounded py-3 px-4 shadow-xl"
                  {...register("observacao", { required: false })}
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
