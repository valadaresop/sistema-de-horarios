const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const Professor = require('../professor/professorModel')

//Rota da página
router.get("/professor", (req, res) => {
    res.render("pages/professor")

});

//Captura do POST Professor
router.post('/professor/save', (req, res) => {
    const nomep = req.body.nomep;
    const prefdp = req.body.prefdp;
    const turnop = req.body.turnop;
    const semanap = req.body.semanap;
    const anteriorp = req.body.anteriorp;
    const obsp = req.body.obsp;

    if (nomep != undefined) {
        Professor.create({
            nomep: nomep,
            prefdp: prefdp,
            turnop: turnop,
            semanap: semanap,
            anteriorp: anteriorp,
            obsp: obsp,
            slug: slugify(nomep)

        }).then(() => {
            res.render("./msgs/msgprof")
           // res.send("Salvo com Sucesso!")
        }).catch((erro) => {
            res.send("Erro no cadastro: " + erro)
        })
    } else {
        res.redirect("/professor")
    }
});

//CRUD professor

//Rota Gerenciamento
router.get('/gerenciar/professor', (req, res) => {
    Professor.findAll().then(professores => {
        res.render("gerenciar/professor", { professores: professores });
    });
});

//FUNCAO DELETAR professor
router.post("/professor/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Professor.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/gerenciar/professor");
            });
        } else { // NÃO FOR UM NÚMERO
            res.redirect("/gerenciar/professor");
        }
    } else { // NULL
        res.redirect("/gerenciar/professor");
    }
});


//FUNCAO DE EDITAR professor
router.get('/editar/professor/:id', (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.redirect("/gerenciar/professor");
    }
    Professor.findByPk(id).then(professor => {
        if (professor != undefined) {
            res.render("editar/professor", { professor: professor });
        } else {
            res.redirect("/gerenciar/professor");
        }
    }).catch(erro => {
        res.redirect("/gerenciar/professor");
    })
});

//FUNCAO DE UPDATE professor
router.post('/atualizar/professor', (req, res) => {
    var id = req.body.id;
    var nomep = req.body.nomep;
    var prefdp = req.body.prefdp;
    var turnop = req.body.turnop;
    var semanap = req.body.semanap;
    var anteriorp = req.body.anteriorp;
    var obsp = req.body.obsp;

    Professor.update({
        nomep: nomep,
        prefdp: prefdp,
        turnop: turnop,
        semanap: semanap,
        anteriorp: anteriorp,
        obsp: obsp,

    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/gerenciar/professor");
    })
});


module.exports = router;