import { ChartBarHorizontal, Wallet } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="w-[220px] h-screen bg-[#2a3447] text-white mb-20">
      <div className="flex flex-col items-center py-4">
        <span className="text-[#eff3f6] text-[2rem] h-fit border-b-2 pb-3">
          ManFin Wallet
        </span>
        {/* <span className="text-[#eff3f6] text-[1.5rem] pt-2">
          Gestão de Despesas
        </span> */}
      </div>
      <Link
        to="/portfolio"
        className="flex items-center gap-2 p-3 hover:bg-[#222a39]"
        title="Ir para o Portfólio"
      >
        <ChartBarHorizontal size={20} color="white" weight="fill" /> Portfólio
      </Link>
      <Link
        to="/despesas"
        className="flex items-center gap-2 p-3 hover:bg-[#222a39]"
        title="Ir para as Despesas"
      >
        <Wallet size={20} color="white" weight="fill" /> Despesas
      </Link>
    </div>
  )
}

export default Menu
