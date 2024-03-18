import { ChartBarHorizontal, Wallet } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="w-[200px] h-screen bg-[#2a3447] text-white mb-20">
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
