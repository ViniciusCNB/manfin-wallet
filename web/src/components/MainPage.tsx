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
      <div className="bg-[#102533] h-full max-h-max w-full py-14 px-5 flex flex-row gap-5">
        <div className="bg-gray-200 flex flex-col w-72 h-fit justify-center rounded-lg">
          <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
            <p className="uppercase text-xl text-white">Operações disponíveis</p>
          </div>
          <div>
            <Dialog.Root open={open1} onOpenChange={setOpen1}>
              <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-start rounded-lg p-4 uppercase">
                Adicionar nova instituição
              </Dialog.Trigger>

              <AddInstitutionModal />
            </Dialog.Root>
          </div>
          <div>
            <Dialog.Root open={open2} onOpenChange={setOpen2}>
              <Dialog.Trigger className="hover:bg-gray-400/50 w-full flex justify-start rounded-lg p-4 uppercase">
                Adicionar nova ação
              </Dialog.Trigger>

              <AddStockModal />
            </Dialog.Root>
          </div>
        </div>
        <div className="bg-gray-200 w-[85%] flex flex-col justify-center rounded-lg">
          <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
            <p className="uppercase text-xl text-white">Ações Cadastradas</p>
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
