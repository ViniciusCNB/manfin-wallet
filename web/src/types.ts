export interface AcaoProps {
  codigo: string
  instituicao: string
  data_atualizacao: string
  preco: number
  quantidade: number
  valor_total: number
}

export interface DespesaProps {
  id: number
  descricao: string
  data: string
  valor: number
  forma_pagamento: number
  categoria: number
  observacao: string
}
