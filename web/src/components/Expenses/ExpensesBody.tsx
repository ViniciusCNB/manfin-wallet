import { useEffect, useState, lazy, Suspense } from "react"
import {
  ChartBarHorizontal,
  DotsThreeOutlineVertical,
  House,
} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Dialog from "@radix-ui/react-dialog"
import ExpensesMenu from "./ExpensesMenu"
import axios from "axios"
import { DespesaProps } from "../../types"
import ExpensesTable from "./ExpensesTable"
import { compararPorDataAtualizacao_despesa } from "../../utils"
import AddCategoryModal from "./AddCategoryModal"

const LazyAddExpenseModal = lazy(() => import("./AddExpenseModal"))
const LazyListCategoriesModal = lazy(() => import("./ListCategoriesModal"))

const ExpensesBody = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [despesas, setDespesas] = useState<DespesaProps[]>([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/despesa/")
      .then((response) => response.data)
      .then((data) => setDespesas(data))
  }, [])

  return (
    <>
      <div className="bg-[#eff3f6] w-screen h-screen flex flex-col relative">
        <ExpensesMenu despesas={despesas} />
        <div className="grid grid-cols-2 gap-5 h-full">
          <div className="flex flex-col gap-10 w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-[#187c44] p-6">
            <div className="bg-gray-300 flex flex-col w-full h-full rounded-lg">
              <ExpensesTable
                despesas={despesas.sort(compararPorDataAtualizacao_despesa)}
              />
            </div>
          </div>
        </div>
        <div className="flex-col w-[25%] h-full justify-center rounded-lg hidden">
          <div className="bg-[#187c44] p-5 flex justify-center rounded-t-lg">
            <p className="uppercase text-xl text-white">
              Operações disponíveis
            </p>
          </div>
          <div className="bg-gray-300 rounded-b-lg divide-y-[1px] divide-[#187c44]">
            <Dialog.Root open={open1} onOpenChange={setOpen1}>
              <Dialog.Trigger
                className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                title="Cadastro de uma nova despesa"
              >
                Adicionar nova despesa
              </Dialog.Trigger>

              {open1 && (
                <Suspense>
                  <LazyAddExpenseModal />
                </Suspense>
              )}
            </Dialog.Root>
          </div>
          <div className="bg-gray-300 rounded-b-lg divide-y-[1px] divide-[#187c44]">
            <Dialog.Root open={open2} onOpenChange={setOpen2}>
              <Dialog.Trigger
                className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                title="Cadastro de uma nova categoria"
              >
                Adicionar nova categoria
              </Dialog.Trigger>

              <AddCategoryModal />
            </Dialog.Root>
          </div>
          <div className="bg-gray-300 rounded-b-lg divide-y-[1px] divide-[#187c44]">
            <Dialog.Root open={open3} onOpenChange={setOpen3}>
              <Dialog.Trigger
                className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                title="Listagem de todas as categorias"
              >
                Listar as Categorias
              </Dialog.Trigger>

              {open3 && (
                <Suspense>
                  <LazyListCategoriesModal />
                </Suspense>
              )}
            </Dialog.Root>
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            className="bg-[#187c44] absolute bottom-[120px] right-4 p-3 rounded-[50%] hover:bg-[#255c3d] shadow-lg shadow-black/20"
            title="Exibir opções"
          >
            <DotsThreeOutlineVertical size={20} color="white" weight="fill" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              side="left"
              sideOffset={10}
              className="bg-gray-300 rounded-lg mb-2 border-[#187c44] border-2"
            >
              <DropdownMenu.Label className="bg-[#187c44] p-5 flex justify-center">
                <p className="uppercase text-white text-base">
                  Operações disponíveis
                </p>
              </DropdownMenu.Label>

              <DropdownMenu.Item>
                <Dialog.Root open={open2} onOpenChange={setOpen2}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                    title="Cadastro de uma nova categoria"
                  >
                    Adicionar nova categoria
                  </Dialog.Trigger>

                  <AddCategoryModal />
                </Dialog.Root>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="bg-[#187c44] h-[1px]" />

              <DropdownMenu.Item>
                <Dialog.Root open={open3} onOpenChange={setOpen3}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                    title="Listagem de todas as categorias"
                  >
                    Listar categorias
                  </Dialog.Trigger>

                  {open3 && (
                    <Suspense>
                      <LazyListCategoriesModal />
                    </Suspense>
                  )}
                </Dialog.Root>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="bg-[#187c44] h-[1px]" />

              <DropdownMenu.Item>
                <Dialog.Root open={open1} onOpenChange={setOpen1}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                    title="Cadastro de uma nova despesa"
                  >
                    Adicionar nova despesa
                  </Dialog.Trigger>

                  {open1 && (
                    <Suspense>
                      <LazyAddExpenseModal />
                    </Suspense>
                  )}
                </Dialog.Root>
              </DropdownMenu.Item>

              <DropdownMenu.Arrow fill="#187c44" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <Link
          to="/portfolio"
          className="bg-[#187c44] absolute bottom-16 right-4 p-3 rounded-[50%] hover:bg-[#255c3d] shadow-lg shadow-black/20"
          title="Ir para o Portfólio"
        >
          <ChartBarHorizontal size={20} color="white" weight="fill" />
        </Link>
        <Link
          to="/"
          className="bg-[#187c44] absolute bottom-2 right-4 p-3 rounded-[50%] hover:bg-[#255c3d] shadow-lg shadow-black/20"
          title="Ir para a Home"
        >
          <House size={20} color="white" weight="fill" />
        </Link>
      </div>
    </>
  )
}

export default ExpensesBody
