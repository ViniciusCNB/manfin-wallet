import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { AcaoProps } from "../../types"
import { formataData } from "../../utils"
import { ChartBarHorizontal, House } from "@phosphor-icons/react"

const ApplicationBody = () => {
  const { codigo } = useParams()
  const [acao, setAcao] = useState<AcaoProps>()

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/acao/${codigo}/`)
      .then((response) => response.data)
      .then((data) => setAcao(data))
  }, [codigo])

  console.log(acao)
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
    </>
  )
}

export default ApplicationBody
