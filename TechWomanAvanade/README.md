Treinamento - Tech Woman Avanade com NODE.JS

# Treinamento DIO

// INÍCIO DA PARTE FRONT
- Visual Studio - terminal - instalar na máquina
npm install -g react-native-cli

- Extensões - 
  Node.Js Modules Intellisense
  Node Extension Pack
  Node.JS Exec
  React Native - ES7+ React/Redux/React Native
  React Native Tools (microsoft)

- novo comando
  npm install -g expo-cli

- criar o cliente
  npx create-react-app client

- entrar na pasta: cd client

- remover alguns arquivos - OPCIONAL 
  src/   
  excluir app.css 
  no arquivo app.js apagar header

- Testar
  nmp start

- Adcionar Bootstrap
  npm add bootstrap

- Adcionar Pacote - ReactDOM
  npm add reactstrap react react-dom  

- No arquivo index.js importar bootstrap
  import "bootstrap/dist/css/bootstrap.min.css"

- Importar os arquivos css e realizar as modificações necessárias: pizza

- Executar os comandos
  npm install -g node-sass
  npm install --save-dev node-sass

- Verificar a instalação das dependências no arquivo (não preocupar com a versão)
  package.json
    última linha 
    "devDependencies": {
        "node-sass": "^7.0.1"
    }

- No arquivos index.js arrumar a impotação do css
  import './style/index.css';

- Testar: npm start
//Fim da parte FRONT
___________________________________________________________
// INÍCIO DA PARTE BACK
- Acima da pasta client 
  comando: cd..

- Executar o comando
  npx express-generator --no-view api  //criando a parte BACK NA PASTA api 

- Entrar na pasta criada api
  cd api

- Comando
  code .  //abre o sistema back para utilizar

- Abre janela para codar o back
  bin/www //contém algumas configurações de banco

- Alterar configuração da porta em www
  normalizePort(process.env.PORT || '3005')

- Pode deletar a pasta 
    public
    e em routes/users.js

- Em app.js pode deletar os usuários

- No arquivo package.json, incluir os scripts
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/wwww",
    "create-data": "node data/generationFakeData.js"
  },

- No terminal instalar as dependências
  npm install --global yarn
  npm install -g nodemon 
  npm install --save-dev nodemon

- Comando: yarn dev
--> Se erro: Abrir PowerShell como administrador
--> Habilitar - rodar scripts não assinados, testar!
    Set-ExecutionPolicy AllSigned
    Get-ExecutionPolicy
    Set-ExecutionPolicy -ExecutionPolicy Bypass

- Verificar se package.jason contém as novas dependencias instaladas
  "devDependencies": {
     "nodemon": "^2.0.19"
  }

- No arquivo api/routes/index.js
  excluir
  res.render('index', { title: 'Express' });
  acrescentar UM TESTE
   res.status(200).send("Tudo certo!"); //teste se ok a conexão com banco de dados MongoDB

- MongoDB: 
    dá permissão de criar vários BD 
    uma única coleção com vários documentos
    não há necessidade de tipos, um doc ser semelhante ao outro
    não precisa projetar seu esquema
    dados heterogêneos
    não há injeção de SQL
    fácil integração com BIG DATA

- Vá em app.js e declarar o banco de dados
  const mongoose = require("mongoose");

- Instalar e adicionar ao yarn
  npm install cors
  yarn add cors

- Declarar o banco instalado no app.js e use
  var cors = require("cors");
  app.use(cors());

- Instalar doent
  npm add dotenv

- Em app.js acrescentar o dotenv
  require("dotenv").config();

- Criar em API o arquivo .env com a configuração do MongoDB
  MONGO_URL=mongodb://localhost/voeDio

- Em app.js definir o banco, conectar e verificar conexão
  //MONGO DB
  const mongoose = require("mongoose");
  mongoose.connect(process.env.MONGO_URL,{
      useUnifiedTopoLogy: true,
      useNewUrlParser: true
  });
  var db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));

  //Verificando a conexão com o banco
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", _ => {
      console.log("Conectado com o banco")
  });

_____________________________________________
//MENSAGERIA - RabbitMQ
- Necessário NODE.JS e RabbitMQ (necessário Erlang)
- Abrir RabbitMQ Command prompt
  rabbitmq-plugins enable rabbitmq_management

- Abrir no navegador
  localhost:15672
  usuário e senha: guest

- criar pasta na raiz do projeto: rabbitmq

- No terminal dentro da pasta criada
  npm init -y
  npm install amqplib

- criar os atuadores: quem vai enviar e receber as mensagens
  criar arquivo: sender.js

- para testar o envio de mensagem, no terminal dentro da pasta rabbitmq
  node .\sender.js

- verificar no rabbitmq no navegador a variavel codingtest sendo enviada

- criar o arquivo: receiver.js
- testar no terminal se funcionou
  node .\receiver.js

___________________________________

- criar a pasta componentes 
  main.js  navbar.js  table.js  thanYou.js

- Em Apps.js fazer as importações dos arquivos

- Abrir terminal na pasta client e testar o sistema
  yarn start

- Em book.js
  Fazer a parte de front end e tabelas do banco MongoDB
  yarn start (o sistema roda mas sem assentos disponíveis pois temos que criar o arquivo
  de vialidade de assentos)
 
 _______________________________________________
 Back-end  e Banco
- Em API routes
  criar arquivo avaibilityRoute.js
                reservationRoute.js

- Em models
  criar arquivos day.js reservation.js table.ja

- Em data
  criar arquivos allTables.jason  allTables.js generateFakeData.js

- Dentro de API no terminal. Instalar Banco de Dados Mongoose
  Instalar MongoDb no Windows depois no ambiente de desenvolvimento
  npm install mongoose

- Iniciar o sistema - testar
  yarn start

________________________________________
//Envio de E-mails
 
- Instalar o Send Grid, fazer seu registro
sendgrid.com/

- Configurar o SendGrid: Settings -> API Keys
  - criar uma chave: nome e acesso restrito e habilitar: Mail Send - clicar em create and view
  - copiar a key gerada 

- Registrar a key gerada no arquivo .env

- Atualizar app.js - chamar sendgrid

- No terminal, e API instalar sendgrid no sistema
  npm install @sendgrid/mail

- Codar o envio do e-mail em app.js