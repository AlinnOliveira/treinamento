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


  



