var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/day").model;
const Reservation = require("../models/reservation").model;

router.post("/", function(req, res, next) {
  Day.find({ date: req.body.date }, (err, days) => {
    //Não houve erro
    if (!err) {
      if (days.length > 0) {
        let day = days[0];
        day.tables.forEach(table => {
            //Se estiver na tabela correta
          if (table._id == req.body.table) {
            //criar nova reserva
            table.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email
            });
            table.isAvailable = false;
            day.save(err => {
              if (err) {
                console.log(err);
              } else {
                console.log("Reservado");
                res.status(200).send("Reserva adicionada");
              }
            });
          }
        });
      } else {
        console.log("Data não encontrada");
      }
    }
  });
});

module.exports = router;