var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/day").model;
//Apenas trata os dados da reserva para uma determinada data 
router.post("/", function(req, res, next) {
    console.log("Requisição ok");
  
    console.log(req.body);
    const dateTime = new Date(req.body.date);
    Day.find({ date: dateTime }, (err, docs) => {
        if (!err) {
          //Dados encontrados
          if (docs.length > 0) {
            console.log("Dados já existentes.");
            res.status(200).send(docs[0]);
          } else { // Dados não encontrados, criando os dados
            // require: onde ficará os dados
            const allTables = require("../data/allTables");
            const day = new Day({
              date: dateTime,
              tables: allTables
            });
            day.save(err => {
              if (err) {
                res.status(400).send("Erro ao salvar os dados!");
              } else {
                // Data salva e é necessário retornar todas as tabelas
                // porque todas estão disponíveis
                console.log("Nova data criada!");
                Day.find({ date: dateTime }, (err, docs) => {
                  err ? res.sendStatus(400) : res.status(200).send(docs[0]);
                });
              }
            });
          }
        //Dados não encontrados
        } else {
          res.status(400).send("Erro. Não foi possível procurar por esta data");
        }
    });
});
    
    module.exports = router;