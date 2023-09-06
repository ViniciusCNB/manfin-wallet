# ManFin Wallet

"ManFin Wallet" é um projeto que tem como objetivo permitir ao usuário gerenciar sua vida financeira em dois âmbitos: investimentos e depesas.

Tecnologias utilizadas para o desenvolvimento do projeto:
- Front em React;
- Back em Django;
- Banco de Dados PostgreSQL.

---

## Passo-a-passo para executar a aplicação

### Para o servidor

OBS.:<br />
1- É utilizado o SGBD Postgres, por isso é necessário tê-lo instalado em sua máquina.<br />
  1.1- Após a instalação é preciso criar um usuário e um banco de dados para utilizar na aplicação.<br />
2- Como o back-end é em Python, é necessário tê-lo instalado em sua máquina também.<br />
  2.1- Após a instalação, na pasta raiz do servidor (investment-portfolio/server/~), é necessário executar o comando `pip install -r requirements.txt` para instalar todas as dependências.

Sobre o servidor (importante estar na pasta raiz do servidor investment-portfolio/server/~):

1- Após os passo anteriores, você deve ir até a pasta raiz do servidor (investment-portfolio/server/~) e criar um arquivo chamado .env. Nele deverá colocar todas as configurações necessárias para a conexão com o banco de dados neste modelo:<br />
DB_NAME=<br />
DB_USER=<br />
DB_PASS=<br />
DB_HOST=<br />
DB_PORT=<br />
Caso o seu banco de dados tenha sido criado na sua própria máquina, utilizar 'localhost' no campo HOST, verificar a porta na qual o servidor é hospedado na sua máquina (geralmente 5432). Inserir o usuário criado no Postgres, a senha e o nome do banco criado.

2- Agora, antes de executar o servidor de vez, é preciso executar os comandos `python manage.py makemigrations investments` e `python manage.py migrate investments` para criação das tabelas no banco de dados informado no .env.

3- Agora é só executar o servidor e usufruir da aplicação com o comando `python manage.py runserver`. 


### Para o front

Estando na raíz do front (investment-portfolio/web/~), basta rodar o comando `npm install` para instalar todas as dependências, libs e frameworks e, após isso, rodar o comando `npm run dev`.
<br />
<br />
OBS.: Importante lembrar que para a aplicação funcionar precisa estar tanto com o front-end executando quanto o servidor executando, então abra duas janelas do seu terminal para a execução dupla.
