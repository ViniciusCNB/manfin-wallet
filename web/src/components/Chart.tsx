import { PieChart, Pie, Tooltip } from "recharts"
import { AcaoProps } from "../types"

interface ChartProps {
  acoes: AcaoProps[]
}

const Chart = (props: ChartProps) => {
  const fillData = () => {
    const data: { name: string; value: number }[] = []
    props.acoes.map((acao: AcaoProps) => {
      data.push({ name: acao.codigo, value: acao.valor_total })
    })
    return data
  }

  console.log(fillData())
  return (
    <PieChart className="w-full" width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={fillData()}
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#c1d200"
        label
      />
      <Tooltip />
    </PieChart>
  )
}

export default Chart
