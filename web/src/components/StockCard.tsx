interface StockCardProps {
  codigo: string
  instituicao: string
  data_atualizacao: string
  preco: number
  quantidade: number
  valor_total: number
}

const StockCard = (props: StockCardProps) => {
  return (
    <>
      <div className="hover:bg-gray-400/50 w-full grid grid-cols-6 justify-start rounded-xl p-4 mb-3">
        <p>{props.codigo}</p>
        <p>{props.data_atualizacao}</p>
        <p>{props.instituicao}</p>
        <p>{props.preco}</p>
        <p>{props.quantidade}</p>
        <p>{props.valor_total}</p>
      </div>
    </>
  )
}

export default StockCard
