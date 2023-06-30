const NotFoundPage = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-[#033959] to-[#01141f] h-screen w-screen text-white p-24 text-6xl grid grid-cols-2 gap-14 border-b-2 border-r-2">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div>ERRO 404</div>
          <div>Página não encontrada.</div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-white text-[5.5rem] border-b-2 h-fit py-2">
            ManFin Wallet
          </span>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
