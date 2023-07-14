import { AcaoProps } from "./types"


// FUNÇÕES

export const totalSharesValue = (acoes: AcaoProps[]) => {
  let soma = 0
  acoes.map((acao) => {
    soma += acao.valor_total
  })
  return soma
}

export const fillData = (acoes: AcaoProps[], data_inst: string[]) => {
  acoes.map((acao: AcaoProps) => {
    data_inst.push(acao.instituicao)
  })
}

export const contaInstituicao = (data_inst: string[], nomes_inst: string[], quantidades_inst: number[]) => {
  const contagem: { [key: string]: number } = {}

  for (let i = 0; i < data_inst.length; i++) {
    const elemento = data_inst[i]
    if (contagem[elemento]) {
      contagem[elemento]++
    } else {
      contagem[elemento] = 1
    }
  }

  for (const nome in contagem) {
    // eslint-disable-next-line no-prototype-builtins
    if (contagem.hasOwnProperty(nome)) {
      nomes_inst.push(nome)
      quantidades_inst.push(contagem[nome])
    }
  }
}

export const compararPorValorTotal = (a: AcaoProps, b: AcaoProps) => {
  // Ordem descrescente
  if (a.valor_total > b.valor_total) {
    return -1
  }
  if (a.valor_total < b.valor_total) {
    return 1
  }
  return 0
}

export const compararPorDataAtualizacao = (a: AcaoProps, b: AcaoProps) => {
  const dataA = new Date(a.data_atualizacao)
  const dataB = new Date(b.data_atualizacao)

  if (dataA < dataB) {
    return -1
  }
  if (dataA > dataB) {
    return 1
  }
  return 0
}

export   const formataData = (data_acao: string) => {
  const data = new Date(data_acao)
  const dataFormatada = data.toLocaleDateString("pt-BR")
  return dataFormatada
}


// CONFIGURAÇÃO DOS GRÁFICOS


