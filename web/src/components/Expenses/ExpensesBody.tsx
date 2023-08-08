import { useEffect, useState } from "react"
import {
  ChartBarHorizontal,
  DotsThreeOutlineVertical,
  House,
} from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Dialog from "@radix-ui/react-dialog"
import AddExpenseModal from "./AddExpenseModal"
import ExpensesMenu from "./ExpensesMenu"
import axios from "axios"
import { DespesaProps } from "../../types"
import ExpensesTable from "./ExpensesTable"
import { compararPorDataAtualizacao_despesa } from "../../utils"

const ExpensesBody = () => {
  const [open, setOpen] = useState(false)
  const [despesas, setDespesas] = useState<DespesaProps[]>([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/despesa/")
      .then((response) => response.data)
      .then((data) => setDespesas(data))
  }, [])

  console.log(despesas)
  return (
    <>
      <div className="bg-[#eff3f6] w-screen h-screen flex flex-col relative">
        <ExpensesMenu despesas={despesas} />
        <div className="flex flex-col gap-10 h-full overflow-auto scrollbar-thin scrollbar-thumb-[#187c44] p-6">
          <div className="bg-gray-300 flex flex-col w-1/2 h-full rounded-lg">
            <ExpensesTable despesas={despesas.sort(compararPorDataAtualizacao_despesa)} />
          </div>
        </div>
        <div className="flex-col w-[25%] h-full justify-center rounded-lg hidden">
          <div className="bg-[#187c44] p-5 flex justify-center rounded-t-lg">
            <p className="uppercase text-xl text-white">
              Operações disponíveis
            </p>
          </div>
          <div className="bg-gray-300 rounded-b-lg divide-y-[1px] divide-[#187c44]">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger
                className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                title="Cadastro de uma nova instituição"
              >
                Adicionar nova despesa
              </Dialog.Trigger>

              <AddExpenseModal />
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
                <Dialog.Root open={open} onOpenChange={setOpen}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                    title="Cadastro de uma nova instituição"
                  >
                    Adicionar nova despesa
                  </Dialog.Trigger>

                  <AddExpenseModal />
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
