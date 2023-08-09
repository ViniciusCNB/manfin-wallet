import { AcaoProps } from "../../types"
import { totalSharesValue } from "../../utils"

interface PortfolioMenuProps {
  acoes: AcaoProps[]
}

const PortfolioMenu = (props: PortfolioMenuProps) => {
  return (
    <>
      <div className="bg-[#01141f] w-full h-[100px] flex flex-row justify-between items-center p-4 shadow-lg shadow-black/20">
        <div className="flex items-center">
          <span className="text-[#eff3f6] text-[2.5rem] h-fit pr-6 border-r-2">
            ManFin Wallet
          </span>
          <span className="text-[#eff3f6] ml-6 text-[2.1rem]">Portfólio de Investimentos</span>
        </div>
        <div className="text-[#eff3f6] text-[1.5rem] h-fit uppercase flex flex-row gap-2">
          <span>Total Investido:</span>
          <span>
            R${" "}
            {totalSharesValue(props.acoes).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>
    </>
  )
}

export default PortfolioMenu
