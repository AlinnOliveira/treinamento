require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

//SendGrid
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// MongoDB
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users'); //pode deletar caso não tenha o users.js em routes

// Express
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
  console.log("Conectado com o banco");
});

const sendMail = async(msg) => {
  try{
    await sgMail.send(msg);
    console.log("Mensagem enviada com sucesso!");
  }catch(error){
    console.error(error);

    if(error.response){
      console.error(error.response.body);
    }
  }
};

sendMail({
  //usar o email que foi cadastrado no SendGrid
  to: "aline_oliveira@yahoo.com",
  from: "aline_oliveira@yahoo.com",
  subject: "Confirmação de cadastro no sistema",
  text: "Parabéns, você acaba de se registrar no sistema Voe Dio",
});

module.exports = app;