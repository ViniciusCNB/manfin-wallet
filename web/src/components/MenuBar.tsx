import { Sun } from "@phosphor-icons/react"
import "../styles/index.css"

const MenuBar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600/80 to-blue-900/40 w-[100%] mb-5 py-8 px-10 flex items-center justify-between rounded-xl">
        <span className="text-white font-bold text-[3rem]">ManFin Wallet</span>
        <button className="bg-blue-900/20 hover:bg-[#b0c4fc]/80 p-2 rounded-[50%] border-solid border-[1px] border-white">
          <Sun size={20} color="white" weight="bold" />
        </button>
      </div>
    </>
  )
}

export default MenuBar
