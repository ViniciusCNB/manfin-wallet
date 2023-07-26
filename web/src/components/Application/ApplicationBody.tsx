import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AcaoProps } from "../../types"
import { formataData } from "../../utils"
import { ChartBarHorizontal, DotsThreeOutlineVertical, House, PlusCircle, Trash } from "@phosphor-icons/react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Dialog from "@radix-ui/react-dialog"
import AddApplicationModal from "./AddApplicationModal"
import DeleteStockModal from "./DeleteStockModal"

const ApplicationBody = () => {
  const { codigo } = useParams()
  const [acao, setAcao] = useState<AcaoProps>()
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)


  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/acao/${codigo}/`)
      .then((response) => response.data)
      .then((data) => setAcao(data))
  }, [codigo])

  return (
    <>
      <div className="bg-[#eff3f6] w-screen h-screen flex flex-col p-2 gap-2 relative">
        <div className="bg-[#01141f] rounded-lg w-full text-3xl text-white py-5 text-center uppercase">
          Análise da Aplicação
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-300 grid grid-cols-2 rounded-lg p-3 shadow-inner shadow-black/25">
            <div className="font-bold">
              <p>ATIVO</p>
              <p>DATA ÚLTIMA APLICAÇÃO</p>
              <p>INSTITUIÇÃO</p>
              <p>PREÇO</p>
              <p>QUANTIDADE</p>
              <p>VALOR TOTAL</p>
            </div>
            <div>
              <p>{acao?.codigo}</p>
              <p>
                {acao != undefined ? formataData(acao.data_atualizacao) : ""}
              </p>
              <p>{acao?.instituicao}</p>
              <p>{acao?.preco}</p>
              <p>{acao?.quantidade}</p>
              <p>{acao?.valor_total}</p>
            </div>
          </div>
          <div className="bg-gray-300 rounded-lg p-3 shadow-inner shadow-black/25">
            <h1>Teste</h1>
          </div>
          <div className="bg-gray-300 rounded-lg p-3 shadow-inner shadow-black/25">
            <h1>Teste</h1>
          </div>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            className="bg-[#01141f] absolute bottom-[120px] right-4 p-3 rounded-[50%] hover:bg-[#012234] shadow-lg shadow-black/20"
            title="Exibir opções"
          >
            <DotsThreeOutlineVertical size={20} color="white" weight="fill" />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              side="left"
              sideOffset={10}
              className="bg-gray-300 rounded-lg mb-2 border-[#01141f] border-2"
            >
              <DropdownMenu.Label className="bg-[#01141f] p-5 flex justify-center">
                <p className="uppercase text-white text-base">
                  Operações disponíveis
                </p>
              </DropdownMenu.Label>

              <DropdownMenu.Item>
              <Dialog.Root open={open1} onOpenChange={setOpen1}>
                <Dialog.Trigger
                  className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase"
                  title="Nova Aplicação"
                >
                    Nova Aplicação
                  </Dialog.Trigger>

                  <AddApplicationModal
                    codigo={acao != undefined ? acao.codigo : ""}
                    instituicao={acao != undefined ? acao.instituicao : ""}
                  />
                </Dialog.Root>

              </DropdownMenu.Item>
              <DropdownMenu.Separator className="bg-[#01141f] h-[1px]" />
              <DropdownMenu.Item>
                <Dialog.Root open={open2} onOpenChange={setOpen2}>
                  <Dialog.Trigger
                    className="hover:bg-gray-400/50 w-full flex justify-center p-4 uppercase"
                    title="Apagar Aplicação"
                  >
                    Apagar Aplicação
                  </Dialog.Trigger>

                  <DeleteStockModal codigo={acao != undefined ? acao.codigo : ""} />
                </Dialog.Root>
              </DropdownMenu.Item>

              <DropdownMenu.Arrow />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
        <Link
          to="/portfolio"
          className="bg-[#01141f] absolute bottom-16 right-4 p-3 rounded-[50%] hover:bg-[#012234] shadow-lg shadow-black/20"
          title="Ir para o Portfólio"
        >
          <ChartBarHorizontal size={20} color="white" weight="fill" />
        </Link>
        <Link
          to="/"
          className="bg-[#01141f] absolute bottom-2 right-4 p-3 rounded-[50%] hover:bg-[#012234] shadow-lg shadow-black/20"
          title="Ir para a Home"
        >
          <House size={20} color="white" weight="fill" />
        </Link>
      </div>
      <div className="justify-center items-center my-2 px-4 hidden">
          <Dialog.Root open={open1} onOpenChange={setOpen1}>
            <Dialog.Trigger
              className="hover:bg-gray-400 p-3 rounded-[50%]"
              title="Nova Aplicação"
            >
              <PlusCircle size={25} weight="fill" />
            </Dialog.Trigger>

            <AddApplicationModal
              codigo={acao != undefined ? acao.codigo : ""}
              instituicao={acao != undefined ? acao.instituicao : ""}
            />
          </Dialog.Root>
          <Dialog.Root open={open2} onOpenChange={setOpen2}>
            <Dialog.Trigger
              className="hover:bg-gray-400 p-3 rounded-[50%]"
              title="Apagar Aplicação"
            >
              <Trash size={20} weight="bold" />
            </Dialog.Trigger>

            <DeleteStockModal codigo={acao != undefined ? acao.codigo : ""} />
          </Dialog.Root>
        </div>
    </>
  )
}

export default ApplicationBody
