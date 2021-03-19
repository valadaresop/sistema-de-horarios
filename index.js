const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const slugify = require("slugify");
const connection = require("./database/database");
const professorController = require("./professor/professorController");
const professorModel = require("./professor/professorModel");

const gradeController = require("./grade/gradeController");
const gradeModel = require("./grade/gradeModel");

const horarioController = require("./horario/horarioController");
const horarioModel = require("./horario/horarioModel");


const loginController = require("./login/login");


// View engine
app.set('view engine', 'ejs');


// Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Chamadas dos Controllers
app.use("/", professorController);
app.use("/", gradeController);
app.use("/", horarioController);
app.use("/", loginController);



app.listen(1010, () => {
    console.log("O servidor está rodando!")
})