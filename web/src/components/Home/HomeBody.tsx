import { AcaoProps, DespesaProps } from "../../types"
import Chart from "react-apexcharts"
import { Link } from "react-router-dom"
import { formataData, totalExpensesValue, totalSharesValue } from "../../utils"
import ExpenseCard from "../Expenses/ExpensesCard"

const HomeBody = () => {
  const port_data: AcaoProps[] = [
    {
      codigo: "BBAS3",
      data_atualizacao: "2023-03-15",
      instituicao: "RICO",
      preco: 41.58,
      quantidade: 100,
      valor_total: 4158,
    },
    {
      codigo: "PETR4",
      data_atualizacao: "2022-10-25",
      instituicao: "RICO",
      preco: 29.53,
      quantidade: 30,
      valor_total: 885.9,
    },
    {
      codigo: "VALE3",
      data_atualizacao: "2022-05-03",
      instituicao: "RICO",
      preco: 64.23,
      quantidade: 50,
      valor_total: 3211.5,
    },
    {
      codigo: "CASH3",
      data_atualizacao: "2021-02-15",
      instituicao: "RICO",
      preco: 8.8,
      quantidade: 10,
      valor_total: 88.0,
    },
    {
      codigo: "MXRF11",
      data_atualizacao: "2020-12-10",
      instituicao: "RICO",
      preco: 10.07,
      quantidade: 30,
      valor_total: 302.1,
    },
  ]

  const exp_data: DespesaProps[] = [
    {
      id: 1,
      descricao: "Lanche",
      data: "2023-08-01",
      valor: 8.5,
      pagamento: "Dinheiro",
      categoria: "Alimentação",
    },
    {
      id: 2,
      descricao: "Aluguel",
      data: "2023-08-29",
      valor: 420.0,
      pagamento: "Pix",
      categoria: "Casa",
    },
    {
      id: 3,
      descricao: "Supermercado",
      data: "2023-08-15",
      valor: 210.0,
      pagamento: "x2 de 105,00 no crédito",
      categoria: "Alimentação",
    },
    {
      id: 4,
      descricao: "Conta de Água",
      data: "2023-08-26",
      valor: 32.56,
      pagamento: "Pix",
      categoria: "Casa",
    },
    {
      id: 5,
      descricao: "Farmácia",
      data: "2023-08-10",
      valor: 82.96,
      pagamento: "x1 no crédito",
      categoria: "Saúde",
    },
  ]

  const PieChartSeries_port = port_data.map((acao) => {
    return acao.valor_total
  })

  const PieChartOptions_port = {
    chart: {
      id: "basic-pie",
    },
    labels: port_data.map((acao) => {
      return acao.codigo
    }),
    legend: {
      labels: {
        colors: "#fff",
        useSeriesColors: true,
      },
    },
  }

  const PieChartSeries_exp = exp_data.map((despesa) => {
    return despesa.valor
  })

  const PieChartOptions_exp = {
    chart: {
      id: "basic-pie",
    },
    labels: exp_data.map((despesa) => {
      return despesa.descricao
    }),
    legend: {
      labels: {
        colors: "#fff",
        useSeriesColors: true,
      },
    },
  }

  return (
    <>
      <div className="bg-white h-fit max-h-max w-full flex flex-row gap-[1px]">
        <div className="flex flex-col w-1/2 gap-20 p-10 bg-gradient-to-l from-[#204662] to-[#102533] shadow-inner shadow-black">
          <div className="uppercase text-4xl text-white text-center">
            <span className="border-b-2">Portfólio de Investimentos</span>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} Realize operações na sua carteira como adicionar um novo
              ativo ou uma nova aplicação.
              <br />
              {">"}
              {">"} Adicione uma nova instituição financeira para que, dessa
              forma, seja possível adicionar novas aplicações.
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <div className="bg-[#01141f] p-5 rounded-t-lg flex justify-center">
              <p className="uppercase text-xl text-white">
                Aplicações Cadastradas
              </p>
            </div>
            <div className="bg-gray-200/80 h-fit overflow-auto scrollbar-thin scrollbar-thumb-[#01141f] divide-y-[1px] divide-gray-800 rounded-b-lg">
              {port_data.map((acao) => {
                return (
                  <div className="w-full grid grid-cols-6 py-2 text-center divide-x-2 divide-[#01141f]">
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">Ativo</span>{" "}
                        <br />
                        {acao.codigo}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Data da Compra
                        </span>
                        <br /> {formataData(acao.data_atualizacao)}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Instituição
                        </span>{" "}
                        <br />
                        {acao.instituicao}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">Preço</span>{" "}
                        <br /> R${" "}
                        {acao.preco.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Quantidade
                        </span>{" "}
                        <br />
                        {acao.quantidade}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#01141f]">
                          Saldo Atual
                        </span>{" "}
                        <br />
                        R${" "}
                        {acao.valor_total.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="bg-[#01141f] mt-2 py-3 px-4 flex justify-between rounded-lg uppercase text-2xl text-white">
              <p>Total Investido</p>
              <p>
                R${" "}
                {totalSharesValue(port_data).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} As aplicações cadastradas aparecerão em uma tabela como a de
              cima, exibindo assim todos os dados fornecidos no momento da
              operação de registro da aplicação.
              <br />
              {">"}
              {">"} Além disso, é possível visualizar também o valor total
              investido pelo usuário.
            </p>
          </div>
          <div className="flex flex-col text-center gap-8 items-center">
            <Chart
              type="pie"
              series={PieChartSeries_port}
              options={PieChartOptions_port}
              width={500}
              height={300}
            />
            <span className="text-white text-2xl uppercase">
              Distribuição dos Ativos
            </span>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} O software também conta com uma exibição dinâmica dos dados
              fornecidos.
              <br />
              {">"}
              {">"} Por exemplo, com o gráfico acima, é possível visualizar a
              influência que cada ativo exerce em sua carteira, tornando
              possível uma análise mais assertiva e concreta acerca do seu
              patrimônio.
              <br />
              {">"}
              {">"} Note que, com o ponteiro do mouse, você é capaz de
              identificar os ativos em cada porção do gráfico.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/portfolio"
              className="bg-[#01141f] p-4 uppercase rounded-lg text-white text-2xl border-2 hover:bg-[#01141f]/50"
            >
              Ir para o portfólio
            </Link>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-[#4d946c] to-[#0f532d] w-1/2 p-10 shadow-inner shadow-black gap-20">
          <div className="uppercase text-4xl text-white text-center">
            <span className="border-b-2">Gestão de Despesas</span>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} Gerencie todos os seus gastos em um só lugar.
              <br />
              {">"}
              {">"} Adicione uma nova categoria para que, dessa forma, seja
              possível adicionar novas despesas.
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <div className="bg-[#187c44] p-5 rounded-t-lg flex justify-center">
              <p className="uppercase text-xl text-white">
                Histórico de Despesas
              </p>
            </div>
            <div className="bg-gray-200/80 h-fit overflow-auto scrollbar-thin scrollbar-thumb-[#187c44] divide-y-[1px] divide-gray-800 rounded-b-lg">
              {exp_data.map((expense) => {
                return (
                  <div className="w-full grid grid-cols-5 py-2 text-center divide-x-2 divide-[#187c44]">
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#187c44]">Data</span>
                        <br /> {formataData(expense.data)}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#187c44]">
                          Categoria
                        </span>{" "}
                        <br />
                        {expense.categoria}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#187c44]">
                          Descrição
                        </span>{" "}
                        <br />
                        {expense.descricao}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#187c44]">Valor</span>{" "}
                        <br /> R${" "}
                        {expense.valor.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p>
                        <span className="font-bold text-[#187c44]">
                          Forma de Pegamento
                        </span>{" "}
                        <br />
                        {expense.pagamento}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="bg-[#187c44] mt-2 py-3 px-4 flex justify-between rounded-lg uppercase text-2xl text-white">
              <p>Total Gasto</p>
              <p>
                R${" "}
                {totalExpensesValue(exp_data).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} As despesas cadastradas aparecerão em uma tabela como a de
              cima, exibindo assim todos os dados fornecidos no momento da
              operação de registro do gasto.
              <br />
              {">"}
              {">"} Além disso, é possível visualizar também o valor total gasto
              pelo usuário.
            </p>
          </div>
          <div className="flex flex-col text-center gap-8 items-center">
            <Chart
              type="pie"
              series={PieChartSeries_exp}
              options={PieChartOptions_exp}
              width={500}
              height={300}
            />
            <span className="text-white text-2xl uppercase">
              Distribuição das Despesas
            </span>
          </div>
          <div className="text-white bg-slate-500/50 p-5 rounded-lg border-2 text-[1.5rem]">
            <p>
              {">"}
              {">"} O software também conta com uma exibição dinâmica dos dados
              fornecidos.
              <br />
              {">"}
              {">"} Por exemplo, com o gráfico acima, é possível visualizar a
              influência que cada gasto exerce no montante da despesa, tornando
              possível uma análise mais assertiva e concreta acerca do seu
              padrão de consumo.
              <br />
              {">"}
              {">"} Note que, com o ponteiro do mouse, você é capaz de
              identificar os gastos em cada porção do gráfico.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/despesas"
              className="bg-[#187c44] p-4 uppercase rounded-lg text-white text-2xl border-2 hover:bg-[#255c3d]"
            >
              Ir para o gestor
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBody
