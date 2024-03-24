import { useEffect, useState, lazy, Suspense } from "react"
import {
  ChartBarHorizontal,
  ChartLineUp,
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
import {
  compararPorDataAtualizacao_despesa,
  contaPagamento,
  totalExpensesValue,
} from "../../utils"
import AddCategoryModal from "./AddCategoryModal"
import Chart from "react-apexcharts"
import AddPaymentModal from "./AddPaymentModal"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

const LazyAddExpenseModal = lazy(() => import("./AddExpenseModal"))
const LazyListCategoriesModal = lazy(() => import("./ListCategoriesModal"))
const LazyListPaymentsModal = lazy(() => import("./ListPaymentsModal"))

const ExpensesBody = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [despesas, setDespesas] = useState<DespesaProps[]>([])
  const [formasPagamento, setFormasPagamento] = useState([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/despesa/")
      .then((response) => response.data)
      .then((data) => setDespesas(data))
      .then(() => console.log(despesas))
  }, [])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/forma-pagamento/")
      .then((response) => response.data)
      .then((data) => setFormasPagamento(data))
  }, [])

  const data_pag: string[] = []
  // fillDataPag(despesas, data_pag)

  const nomes_pag: string[] = []
  const quantidades_pag: number[] = []
  contaPagamento(data_pag, nomes_pag, quantidades_pag)

  const columns: GridColDef[] = [
    {
      field: "data",
      headerName: "Data",
      type: "string",
      width: 100,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      type: "string",
      width: 100,
    },
    {
      field: "descricao",
      headerName: "Descrição",
      width: 150,
    },
    {
      field: "valor",
      headerName: "Valor",
      type: "number",
      width: 110,
    },
    {
      field: "forma_pagamento",
      headerName: "Forma de pagamento",
      type: "number",
      width: 110,
    },
    {
      field: "observacao",
      headerName: "Observação",
      type: "number",
      width: 110,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
  ]

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ]

  return (
    <>
      <div className="bg-slate-600 h-full flex flex-col relative overflow-auto scrollbar-thin scrollbar-thumb-[#2a3447]">
        <div className="flex flex-row px-10 pt-10 pb-5 gap-10 justify-between">
          <div className="bg-[#323e51] p-8 rounded-lg w-fit flex shadow-lg gap-5">
            <div className="w-fit">
              <ChartLineUp size={78} weight="thin" className="text-white" />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <div className="text-white text-3xl ">TOTAL GASTO</div>
              <div className="text-white text-2xl">
                R${" "}
                {totalExpensesValue(despesas).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </div>
            </div>
          </div>
          <div className="bg-[#323e51] p-8 rounded-lg w-[500px] flex shadow-lg gap-5">
            <div className="w-fit"></div>
            <div className="flex flex-col gap-2 items-end"></div>
          </div>
          <div className="bg-[#323e51] p-8 rounded-lg w-[310px] flex shadow-lg gap-5">
            <div className="w-fit"></div>
            <div className="flex flex-col gap-2 items-end"></div>
          </div>
        </div>
        <div className="flex flex-row px-10 py-5 gap-10">
          <div className="flex flex-col gap-10 w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-[#187c44]">
            <div className="bg-gray-300 flex flex-col w-full h-full rounded-lg">
              <ExpensesTable
                despesas={despesas.sort(compararPorDataAtualizacao_despesa)}
              />
            </div>
          </div>
        </div>
        {/* <ExpensesMenu despesas={despesas} /> */}
        <div className="grid grid-cols-2 gap-5 h-full p-6">
          {/* <div className="flex flex-col gap-10 w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-[#187c44] p-6">
            <div className="bg-gray-300 flex flex-col w-full h-full rounded-lg">
              <ExpensesTable
                despesas={despesas.sort(compararPorDataAtualizacao_despesa)}
              />
            </div>
          </div> */}
          {/* <div className="bg-gray-300 flex flex-col w-fit h-fit rounded-lg p-6">
            Resumo das despesas por categoria
          </div> */}
        </div>
        {/* <div className="flex-col w-[25%] h-full justify-center rounded-lg hidden">
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
          <div className="bg-gray-300 rounded-b-lg divide-y-[1px] divide-[#187c44]">
            <Dialog.Root open={open4} onOpenChange={setOpen4}>
              <Dialog.Trigger
                className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                title="Cadastro de uma nova forma de pagamento"
              >
                Adicionar nova forma de pagamento
              </Dialog.Trigger>

              <AddPaymentModal />
            </Dialog.Root>
          </div>
          <div className="bg-gray-300 rounded-b-lg divide-y-[1px] divide-[#187c44]">
            <Dialog.Root open={open5} onOpenChange={setOpen5}>
              <Dialog.Trigger
                className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                title="Listagem de todas as formas de pagamento"
              >
                Listar as formas de pagamento
              </Dialog.Trigger>

              {open5 && (
                <Suspense>
                  <LazyListPaymentsModal />
                </Suspense>
              )}
            </Dialog.Root>
          </div>
        </div> */}
        {/* <DropdownMenu.Root>
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
                <Dialog.Root open={open4} onOpenChange={setOpen4}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                    title="Cadastro de uma nova forma de pagamento"
                  >
                    Adicionar nova forma de pagamento
                  </Dialog.Trigger>

                  <AddPaymentModal />
                </Dialog.Root>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="bg-[#187c44] h-[1px]" />

              <DropdownMenu.Item>
                <Dialog.Root open={open5} onOpenChange={setOpen5}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase text-sm"
                    title="Listagem de todas as formas de pagamento"
                  >
                    Listar formas de pagamento
                  </Dialog.Trigger>

                  {open5 && (
                    <Suspense>
                      <LazyListPaymentsModal />
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
        </DropdownMenu.Root> */}
        {/* <Link
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
        </Link> */}
      </div>
    </>
  )
}

export default ExpensesBody
