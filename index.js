const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const slugify = require("slugify");
const connection = require("./database/database");

const professorController = require("./professor/professorController");
const Professor = require("./professor/professorModel");

const gradeController = require("./grade/gradeController");
const Grade = require("./grade/gradeModel");

const horarioController = require("./horario/horarioController");
const Horario = require("./horario/horarioModel");

const usuarioController = require("./usuario/usuarioController");
const User = require("./usuario/usuarioModel");


// View engine
app.set('view engine', 'ejs');


// Static
app.use(express.static('public'));

//Sessions
app.use(session({
    secret: "area-extra-segurança-das-sessions",
    cookie: { maxAge: 3600000 } //tempo de duração da session mls
}))

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Chamadas dos Controllers
app.use("/", professorController);
app.use("/", gradeController);
app.use("/", horarioController);
app.use("/", usuarioController);



app.listen(3000, () => {
    console.log("O servidor está rodando!")
})