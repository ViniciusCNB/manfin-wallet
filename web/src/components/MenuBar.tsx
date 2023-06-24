import { Sun } from "@phosphor-icons/react"
import "../styles/index.css"

const MenuBar = () => {
  return (
    <>
      <div className="bg-[#01141f] w-[100%] py-8 px-10 flex items-center justify-between shadow-md shadow-slate-800/20 border-solid border-b-[1px]">
        <span className="text-white font-normal text-[3.5rem]">ManFin Wallet</span>
        <button className="bg-blue-900/20 hover:bg-[#b0c4fc]/80 p-2 rounded-[50%] border-solid border-[1px] border-white">
          <Sun size={20} color="white" weight="bold" />
        </button>
      </div>
    </>
  )
}

export default MenuBar
