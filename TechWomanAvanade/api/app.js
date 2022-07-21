var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require("cors");
require("dotenv").config();

//MONGO DB - configurando e conectando
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopoLogy: true,
    useNewUrlParser: true
});
var db = mongoose.connection;

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users'); //pode deletar caso não tenha o users.js em routes

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//foi deletado o arquivo public
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use("/availability", require("./routes/availabilityRoutes"));
app.use("/reserve", require("./routes/reservationRoutes"));
// foi deletado o arquivos users.js
//app.use('/users', usersRouter);

//Verificando a conexão com o banco
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
    console.log("Conectado com o banco")
});

module.exports = app;
