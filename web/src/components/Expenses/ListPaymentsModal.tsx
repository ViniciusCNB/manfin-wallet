import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { Pencil, Trash } from "@phosphor-icons/react"
import EditPaymentModal from "./EditPaymentModal"
import DeletePaymentModal from "./DeletePaymentModal"

const ListPaymentsModal = () => {
  const [formasPagamento, setFormasPagamento] = useState([])
  const [openEditar, setOpenEditar] = useState({})
  const [openDeletar, setOpenDeletar] = useState({})

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/forma-pagamento/`)
      .then((response) => response.data)
      .then((data) => setFormasPagamento(data))
  }, [])

  const handleOpenEditar = (formas_pagamento_desc: string) => {
    // Abra o modal de edição para o item com o ID específico
    setOpenEditar({ ...openEditar, [formas_pagamento_desc]: true })
  }

  const handleCloseEditar = (formas_pagamento_desc: string) => {
    // Feche o modal de edição para o item com o ID específico
    setOpenEditar({ ...openEditar, [formas_pagamento_desc]: false })
  }

  const handleOpenDeletar = (formas_pagamento_desc: string) => {
    // Abra o modal de edição para o item com o ID específico
    setOpenDeletar({ ...openDeletar, [formas_pagamento_desc]: true })
  }

  const handleCloseDeletar = (formas_pagamento_desc: string) => {
    // Feche o modal de edição para o item com o ID específico
    setOpenDeletar({ ...openDeletar, [formas_pagamento_desc]: false })
  }

  console.log(openEditar)
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#bbbbbb] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-fit shadow-lg shadow-black/25 overflow-auto">
          <Dialog.Title className="bg-[#187c44] rounded-lg uppercase py-4 text-2xl text-center font-extrabold mb-10 shadow-lg shadow-black/25">
            Listagem das Formas de Pagamento
          </Dialog.Title>
          <div className="w-full h-full text-[#187c44] flex flex-col gap-2">
            {formasPagamento.length === 0 ? (
              <div className="flex justify-center text-center text-black text-lg">
                Não há formas de pagamento cadastradas.
              </div>
            ) : (
              formasPagamento.map((forma_pagamento) => {
                return (
                  <div
                    className="flex py-6 border-b-[1px] border-[#187c44] text-xl relative font-bold"
                    key={forma_pagamento["id"]}
                  >
                    {forma_pagamento["descricao"]}
                    <div className="flex flex-row gap-1 absolute right-0">
                      <Dialog.Root
                        open={openEditar[forma_pagamento["descricao"]]}
                        onOpenChange={() =>
                          openEditar[forma_pagamento["descricao"]] === false || null
                            ? handleOpenEditar(forma_pagamento["descricao"])
                            : handleCloseEditar(forma_pagamento["descricao"])
                        }
                      >
                        <Dialog.Trigger
                          title="Editar forma de pagamento."
                          className="rounded-[50%] bg-gray-500 py-2 px-2 text-white hover:bg-gray-700 font-bold text-xs shadow-sm shadow-black/25"
                        >
                          <Pencil size={17} weight="bold" />
                        </Dialog.Trigger>
                        <EditPaymentModal
                          id={forma_pagamento["id"]}
                          descricao={forma_pagamento["descricao"]}
                          handleClose={() =>
                            handleCloseEditar(forma_pagamento["descricao"])
                          }
                        />
                      </Dialog.Root>

                      <Dialog.Root
                        open={openDeletar[forma_pagamento["descricao"]]}
                        onOpenChange={() =>
                          openDeletar[forma_pagamento["descricao"]] === false || null
                            ? handleOpenDeletar(forma_pagamento["descricao"])
                            : handleCloseDeletar(forma_pagamento["descricao"])
                        }
                      >
                        <Dialog.Trigger
                          title="Excluir forma de pagamento."
                          className="rounded-[50%] bg-red-500 py-2 px-2 text-white hover:bg-red-700 font-bold text-xs shadow-sm shadow-black/25"
                        >
                          <Trash size={17} weight="bold" />
                        </Dialog.Trigger>
                        <DeletePaymentModal
                          id={forma_pagamento["id"]}
                          descricao={forma_pagamento["descricao"]}
                        />
                      </Dialog.Root>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  )
}

export default ListPaymentsModal
