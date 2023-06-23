import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import AddInstitutionModal from "./AddInstitutionModal"
import AddStockModal from "./AddStockModal"
import axios from "axios"
import StockCard from "./StockCard"
import { AcaoProps } from "../types"

const MainPage = () => {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [acoes, setAcoes] = useState<AcaoProps[]>([])

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/acao/")
      .then((response) => response.data)
      .then((data) => setAcoes(data))
  }, [])

  return (
    <>
      <div className="bg-blue-900/20 h-full w-full p-5 rounded-xl grid grid-cols-2 gap-5">
        <div className="flex flex-col h-fit justify-center p-5 rounded-xl bg-gray-200/50">
          <div className="flex justify-center mb-5">
            <p className="uppercase text-xl font-bold">Operações disponíveis</p>
          </div>
          <div>
            <Dialog.Root open={open1} onOpenChange={setOpen1}>
              <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-start rounded-t-xl p-4 uppercase">
                Adicionar nova instituição
              </Dialog.Trigger>

              <AddInstitutionModal />
            </Dialog.Root>
          </div>
          <div>
            <Dialog.Root open={open2} onOpenChange={setOpen2}>
              <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-start rounded-b-xl p-4 uppercase">
                Adicionar nova ação
              </Dialog.Trigger>

              <AddStockModal />
            </Dialog.Root>
          </div>
        </div>
        <div className="flex flex-col justify-center p-5 rounded-xl bg-gray-200/50">
          <div className="flex justify-center mb-5">
            <p className="uppercase text-xl font-bold">Ações Cadastradas</p>
          </div>
          <div>
            {acoes.map((acao) => {
              return (
                <StockCard
                  key={acao.codigo}
                  codigo={acao.codigo}
                  data_atualizacao={acao.data_atualizacao}
                  instituicao={acao.instituicao}
                  preco={acao.preco}
                  quantidade={acao.quantidade}
                  valor_total={acao.valor_total}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
