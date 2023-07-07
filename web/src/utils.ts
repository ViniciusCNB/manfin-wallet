import { AcaoProps } from "./types"


// FUNÇÕES

export const totalSharesValue = (acoes: AcaoProps[]) => {
  let soma = 0
  acoes.map((acao) => {
    soma += acao.valor_total
  })
  return soma
}


// CONFIGURAÇÃO DOS GRÁFICOS


