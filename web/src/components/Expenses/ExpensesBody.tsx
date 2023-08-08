import { useState } from "react"
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

const ExpensesBody = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="bg-[#eff3f6] w-screen h-screen flex flex-col relative">
        <div className="bg-[#187c44] w-full h-[15%] flex flex-row justify-between items-center p-4 shadow-lg shadow-black/20">
          <div className="flex items-center">
            <span className="text-[#eff3f6] text-[2.5rem] h-fit pr-6 border-r-2">
              ManFin Wallet
            </span>
            <span className="text-[#eff3f6] ml-6 text-[2.5rem]">Despesas</span>
        <ExpensesMenu />
          </div>
          <div className="text-[#eff3f6] text-[1.5rem] h-fit uppercase flex flex-row gap-2">
            <span>Total Gasto:</span>
            <span>
              R${" "}
              {/* {totalSharesValue(props.acoes).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })} */}
            </span>
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
