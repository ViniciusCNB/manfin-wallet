import Fundo from "../../assets/fundo-app.jpg"

const HomeMenu = () => {
  return (
    <div className="relative">
      <img
        src={Fundo}
        className="z-0 w-full h-full absolute object-cover"
        alt=""
      />
      <div className="bg-gradient-to-l from-[#033959]/95 to-[#187c44]/95 w-[100%] h-screen py-8 px-10 flex flex-col gap-10 items-center justify-center shadow-md shadow-slate-800/20 border-solid border-b-[1px] relative z-1">
        <span className="text-white text-[5.5rem] border-b-2">
          ManFin Wallet
        </span>
        {/* <button className="bg-[#01141f]/50 hover:bg-[#1b3a4c] p-2 rounded-[50%] border-dashed border-[1px] border-white absolute bottom-5">
          <Sun size={20} color="white" weight="bold" />
        </button> */}
        <p className="text-white flex text-center font-thin text-[1.1rem] mt-5 w-1/2">
          Desenvolvido por Vinícius Correa Nobre Borges, graduando do 7º período
          de Engenharia da Computação da Universidade Federal de Ouro Preto,
          este projeto possui duas partes.
          <br />
          Uma parte tem como objetivo simular uma carteira de investimentos e
          algumas de suas funcionalidades.
          <br />
          Já a outra foi desenvolvida com o intuito de ser um gestor de
          gastos pessoais.
          <br />
          Escolha uma das rotas abaixo e aproveite a aplicação!
        </p>
      </div>
    </div>
  )
}

export default HomeMenu
