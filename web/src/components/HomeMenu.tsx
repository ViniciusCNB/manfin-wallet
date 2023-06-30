import "../styles/index.css"
import Fundo from "../assets/fundo-app.jpg"

const HomeMenu = () => {
  return (
    <div className="relative">
      <img
        src={Fundo}
        className="z-0 w-full h-full absolute object-cover"
        alt=""
      />
      <div className="bg-gradient-to-r from-[#033959]/95 to-[#01141f]/95 w-[100%] h-screen py-8 px-10 flex flex-col gap-10 items-center justify-center shadow-md shadow-slate-800/20 border-solid border-b-[1px] relative z-1">
        <span className="text-white text-[5.5rem] border-b-2">
          ManFin Wallet
        </span>
        {/* <button className="bg-[#01141f]/50 hover:bg-[#1b3a4c] p-2 rounded-[50%] border-dashed border-[1px] border-white absolute bottom-5">
          <Sun size={20} color="white" weight="bold" />
        </button> */}
        <p className="text-white flex text-center font-thin text-[1.1rem] mt-5 w-8/12">
          Desenvolvido por Vinícius Correa Nobre Borges, graduando do 7º período
          de Engenharia da Computação da Universidade Federal de Ouro Preto,
          este projeto tem como objetivo simular uma carteira de investimentos e
          algumas de suas funcionalidades.
        </p>
      </div>
    </div>
  )
}

export default HomeMenu
