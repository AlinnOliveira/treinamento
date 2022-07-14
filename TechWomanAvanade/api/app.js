var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

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
// foi deletado o arquivos users.js
//app.use('/users', usersRouter);

module.exports = app;
