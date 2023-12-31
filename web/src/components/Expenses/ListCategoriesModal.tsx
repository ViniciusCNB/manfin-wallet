import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import axios from "axios"
import { Pencil, Trash } from "@phosphor-icons/react"
import EditCategoryModal from "./EditCategoryModal"
import DeleteCategoryModal from "./DeleteCategoryModal"

const ListCategoriesModal = () => {
  const [categorias, setCategorias] = useState([])
  const [openEditar, setOpenEditar] = useState({})
  const [openDeletar, setOpenDeletar] = useState({})

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/categoria/`)
      .then((response) => response.data)
      .then((data) => setCategorias(data))
  }, [])

  const handleOpenEditar = (categoria_desc: string) => {
    // Abra o modal de edição para o item com o ID específico
    setOpenEditar({ ...openEditar, [categoria_desc]: true })
  }

  const handleCloseEditar = (categoria_desc: string) => {
    // Feche o modal de edição para o item com o ID específico
    setOpenEditar({ ...openEditar, [categoria_desc]: false })
  }

  const handleOpenDeletar = (categoria_desc: string) => {
    // Abra o modal de edição para o item com o ID específico
    setOpenDeletar({ ...openDeletar, [categoria_desc]: true })
  }

  const handleCloseDeletar = (categoria_desc: string) => {
    // Feche o modal de edição para o item com o ID específico
    setOpenDeletar({ ...openDeletar, [categoria_desc]: false })
  }

  console.log(openEditar)
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#bbbbbb] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[30rem] h-fit shadow-lg shadow-black/25 overflow-auto">
          <Dialog.Title className="bg-[#187c44] rounded-lg uppercase py-4 text-2xl text-center font-extrabold mb-10 shadow-lg shadow-black/25">
            Listagem das Categorias
          </Dialog.Title>
          <div className="w-full h-full text-[#187c44] flex flex-col gap-2">
            {categorias.length === 0 ? (
              <div className="flex justify-center text-center text-black text-lg">
                Não há categorias cadastradas.
              </div>
            ) : (
              categorias.map((categoria) => {
                return (
                  <div
                    className="flex py-6 border-b-[1px] border-[#187c44] text-xl relative font-bold"
                    key={categoria["id"]}
                  >
                    {categoria["descricao"]}
                    <div className="flex flex-row gap-1 absolute right-0">
                      <Dialog.Root
                        open={openEditar[categoria["descricao"]]}
                        onOpenChange={() =>
                          openEditar[categoria["descricao"]] === false || null
                            ? handleOpenEditar(categoria["descricao"])
                            : handleCloseEditar(categoria["descricao"])
                        }
                      >
                        <Dialog.Trigger
                          title="Editar Categoria"
                          className="rounded-[50%] bg-gray-500 py-2 px-2 text-white hover:bg-gray-700 font-bold text-xs shadow-sm shadow-black/25"
                        >
                          <Pencil size={17} weight="bold" />
                        </Dialog.Trigger>
                        <EditCategoryModal
                          id={categoria["id"]}
                          descricao={categoria["descricao"]}
                          handleClose={() =>
                            handleCloseEditar(categoria["descricao"])
                          }
                        />
                      </Dialog.Root>

                      <Dialog.Root
                        open={openDeletar[categoria["descricao"]]}
                        onOpenChange={() =>
                          openDeletar[categoria["descricao"]] === false || null
                            ? handleOpenDeletar(categoria["descricao"])
                            : handleCloseDeletar(categoria["descricao"])
                        }
                      >
                        <Dialog.Trigger
                          title="Excluir Categoria"
                          className="rounded-[50%] bg-red-500 py-2 px-2 text-white hover:bg-red-700 font-bold text-xs shadow-sm shadow-black/25"
                        >
                          <Trash size={17} weight="bold" />
                        </Dialog.Trigger>
                        <DeleteCategoryModal
                          id={categoria["id"]}
                          descricao={categoria["descricao"]}
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

export default ListCategoriesModal
