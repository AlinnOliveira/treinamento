var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.status(200).send("Tudo certo!"); //teste se ok a conexão com banco de dados MongoDB
});

module.exports = router;
