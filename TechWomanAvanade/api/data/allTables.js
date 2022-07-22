// Processamento do arquivo allTabels JSON como objetos da tabela Mongo

var mongoose = require("mongoose");
const Table = require("../models/table").model;
const fs = require("fs");

//lendo o arquivo
let tableData = fs.readFileSync(__dirname + "/allTables.json");
tableData = JSON.parse(tableData).tables;

//importando os dados que serão salvos em allTables.json
let allTables = [];
tableData.forEach(table => {
  // salvando o item  
  allTables.push(new Table(table));
});

module.exports = allTables;