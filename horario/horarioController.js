const express = require("express");
const router = express.Router();
const slugify = require("slugify");
const Horario = require('../horario/horarioModel')

//Rota Principal
router.get("/horario", (req, res) => {
    res.render("pages/horario")
});


//Captura do POST horario
router.post('/horario/save', (req, res) => {
    const aprovadh = req.body.aprovadh;
    const datah = req.body.datah;
    const versaoh = req.body.versaoh;
    const cursoh = req.body.cursoh;
    const semesth = req.body.semesth;
    const blocoh = req.body.blocoh;
    const periodh = req.body.periodh;
    const turmah = req.body.turmah;
    const turnoh = req.body.turnoh;

    const aulah2 = req.body.aulah2;
    const aulah3 = req.body.aulah3;
    const aulah4 = req.body.aulah4;
    const aulah5 = req.body.aulah5;
    const aulah6 = req.body.aulah6;
    const disc2 = req.body.disc2;
    const prof2 = req.body.prof2;
    const disc3 = req.body.disc3;
    const prof3 = req.body.prof3;
    const disc4 = req.body.disc4;
    const prof4 = req.body.prof4;
    const disc5 = req.body.disc5;
    const prof5 = req.body.prof5;
    const disc6 = req.body.disc6;
    const prof6 = req.body.prof6;

    if (disc2 != undefined) {
        Horario.create({
            aprovadh: aprovadh,
            datah: datah,
            versaoh: versaoh,
            cursoh: cursoh,
            semesth: semesth,
            blocoh: blocoh,
            periodh: periodh,
            turmah: turmah,
            turnoh: turnoh,

            aulah2: aulah2,
            aulah3: aulah3,
            aulah4: aulah4,
            aulah5: aulah5,
            aulah6: aulah6,
            disc2: disc2,
            prof2: prof2,
            disc3: disc3,
            prof3: prof3,
            disc4: disc4,
            prof4: prof4,
            disc5: disc5,
            prof5: prof5,
            disc6: disc6,
            prof6: prof6,

            slug: slugify(disc2)
        }).then(() => {
            res.render("./msgs/msghorario")
            //res.send("Salvo com Sucesso!")
        }).catch((erro) => {
            res.send("Erro no cadastro: " + erro)
        })
    } else {
        res.redirect("/horario")
    }
});


//CRUD horario
//Rota Gerenciamento
router.get('/gerenciar/horario', (req, res) => {
    Horario.findAll().then(horarios => {
        res.render("gerenciar/horario", { horarios: horarios });
    });
});

//FUNCAO DELETAR Horario
router.post("/horario/delete", (req, res) => {
    var id = req.body.id;
    if (id != undefined) {
        if (!isNaN(id)) {
            Horario.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/gerenciar/horario");
            });
        } else { // NÃO FOR UM NÚMERO
            res.redirect("/gerenciar/horario");
        }
    } else { // NULL
        res.redirect("/gerenciar/horario");
    }
});

//FUNCAO DE EDITAR Horario
router.get('/atualizar/horario/:id', (req, res) => {
    var id = req.params.id;
    if (isNaN(id)) {
        res.redirect("/gerenciar/horario");
    }
    Horario.findByPk(id).then(horario => {
        if (horario != undefined) {
            res.render("editar/horario", { horario: horario });
        } else {
            res.redirect("/gerenciar/horario");
        }
    }).catch(erro => {
        res.redirect("/gerenciar/horario");
    })
});

//FUNCAO DE UPDATE horario
router.post('/atualizar/horario', (req, res) => {
    var id = req.body.id;
    var aprovadh = req.body.aprovadh;
    var datah = req.body.datah;
    var versaoh = req.body.versaoh;
    var cursoh = req.body.cursoh;
    var semesth = req.body.semesth;
    var blocoh = req.body.blocoh;
    var periodh = req.body.periodh;
    var turmah = req.body.turmah;
    var turnoh = req.body.turnoh;


    var aulah2 = req.body.aulah2;
    var aulah3 = req.body.aulah3;
    var aulah4 = req.body.aulah4;
    var aulah5 = req.body.aulah5;
    var aulah6 = req.body.aulah6;
    var disc2 = req.body.disc2;
    var prof2 = req.body.prof2;
    var disc3 = req.body.disc3;
    var prof3 = req.body.prof3;
    var disc4 = req.body.disc4;
    var prof4 = req.body.prof4;
    var disc5 = req.body.disc5;
    var prof5 = req.body.prof5;
    var disc6 = req.body.disc6;
    var prof6 = req.body.prof6;

    Horario.update({
        aprovadh: aprovadh,
        datah: datah,
        versaoh: versaoh,
        cursoh: cursoh,
        semesth: semesth,
        blocoh: blocoh,
        periodh: periodh,
        turmah: turmah,
        turnoh: turnoh,

        aulah2: aulah2,
        aulah3: aulah3,
        aulah4: aulah4,
        aulah5: aulah5,
        aulah6: aulah6,
        disc2: disc2,
        prof2: prof2,
        disc3: disc3,
        prof3: prof3,
        disc4: disc4,
        prof4: prof4,
        disc5: disc5,
        prof5: prof5,
        disc6: disc6,
        prof6: prof6,
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/gerenciar/horario");
    })
});





module.exports = router;