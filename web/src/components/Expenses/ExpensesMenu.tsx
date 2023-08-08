const ExpensesMenu = () => {
  return (
    <>
      <div className="bg-[#187c44] w-full h-[13%] flex flex-row justify-between items-center p-4 shadow-lg shadow-black/20">
        <div className="flex items-center">
          <span className="text-[#eff3f6] text-[2.5rem] h-fit pr-6 border-r-2">
            ManFin Wallet
          </span>
          <span className="text-[#eff3f6] ml-6 text-[2.5rem]">Despesas</span>
        </div>
        <div className="text-[#eff3f6] text-[1.5rem] h-fit uppercase flex flex-row gap-2">
          <span>Total Gasto:</span>
          <span>
            R${" "}
            {/* {totalSharesValue(props.acoes).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })} */}
          </span>
        </div>
      </div>
    </>
  )
}

export default ExpensesMenu