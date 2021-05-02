const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const Grade = require('../grade/gradeModel');
const middleware = require("../middleware/middleware");

//Rota Principal
router.get("/grade", (req, res) => {
    res.render("pages/grade")
});

//Rota Principal
router.get("/teste", (req, res) => {
    res.render("gerenciar/teste")
});

//Captura do POST grade
router.post('/grade/save', (req, res) => {
    const nomec = req.body.nomec;
    const nomeg = req.body.nomeg;
    const cargahg = req.body.cargahg;
    const codigog = req.body.codigog;
    const periodog = req.body.periodog;

    if (nomeg != undefined) {
        Grade.create({
            nomec: nomec,
            nomeg: nomeg,
            cargahg: cargahg,
            codigog: codigog,
            periodog: periodog,
            slug: slugify(nomeg)

        }).then(() => {
             res.render("./msgs/msggrade")
            //res.send("Salvo com Sucesso!")
        }).catch((erro) => {
            res.send("Erro no cadastro: " + erro)
        })
    } else {
        res.redirect("/grade")
    }
});

//CRUD Grade
//Rota Gerenciamento
router.get('/gerenciar/grade', (req, res) => {
    Grade.findAll().then(grades => {
        res.render("gerenciar/grade", { grades: grades });
    });
});

//FUNCAO DELETAR Grade
router.post("/grade/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Grade.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/gerenciar/grade");
            });
        } else { // NÃO FOR UM NÚMERO
            res.redirect("/gerenciar/grade");
        }
    } else { // NULL
        res.redirect("/gerenciar/grade");
    }
});

//FUNCAO DE EDITAR Grade
router.get('/atualizar/grade/:id', (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.redirect("/gerenciar/grade");
    }
    Grade.findByPk(id).then(grade => {
        if (grade != undefined) {
            res.render("editar/grade", { grade: grade });
        } else {
            res.redirect("/gerenciar/grade");
        }
    }).catch(erro => {
        res.redirect("/gerenciar/grade");
    })
});

//FUNCAO DE UPDATE Grade
router.post('/atualizar/grade', (req, res) => {
    var id = req.body.id;
    var nomec = req.body.nomec;
    var nomeg = req.body.nomeg;
    var cargahg = req.body.cargahg;
    var codigog = req.body.codigog;
    var periodog = req.body.periodog;

    Grade.update({
        nomec: nomec,
        nomeg: nomeg,
        cargahg: cargahg,
        codigog: codigog,
        periodog: periodog,
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/gerenciar/grade");
    })
});


module.exports = router;