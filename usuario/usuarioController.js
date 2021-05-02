const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const middleware = require("../middleware/middleware");
const User = require('../usuario/usuarioModel');

router.get("/", (req, res) => {
    res.render("pages/login")
});

router.get("/admingrade", (req, res) => {
    res.render("pages/loginAdmgrade")
});

router.get("/adminhorario", (req, res) => {
    res.render("pages/loginAdmhorario")
});
router.get("/adminusuario", (req, res) => {
    res.render("pages/loginAdmUsuario")
});

router.get("/usuarios", (req, res) => {
    res.render("pages/criarUsuario")
});

//Rota Gerenciamento dos Usuarios
router.get('/gerenciar/usuario', (req, res) => {
    User.findAll().then(usuarios => {
        res.render("gerenciar/usuarios", { usuarios: usuarios });
    });
});

//Rota de Logout  
router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/");
});

// Criar Usuarios
router.post("/usuario/create", (req, res) => {
    var usuario = req.body.usuario;
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ where: { email: email } }).then(user => {
        if (user == undefined) {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            User.create({
                usuario: usuario,
                email: email,
                password: hash
            }).then(() => {
                res.render("./msgs/msgusers")
            }).catch((err) => {
                res.redirect("/adminusuario");
            });

        } else {
            res.redirect("/adminusuario");
        }
    });
});

//Rota autenticação de Usuario Gerais 
router.post("/acessar", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ where: { email: email } }).then(user => {
        if (user != undefined) { // Se existe um usuário com esse e-mail
            // Validar senha
            var correct = bcrypt.compareSync(password, user.password);
            if (correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/professor");
            } else {
                res.redirect("/");
            }
        } else {
            res.redirect("/");
        }
    });
});


//Rota autenticação de Usuario ADM - Grade
router.post("/admgrade", (req, res) => {
    var emailadm = req.body.emailadm;
    var passwordadm = req.body.passwordadm;
    User.findOne({ where: { emailadm: emailadm } }).then(user => {
        if (user != undefined) { // Se existe um usuário com esse e-mail
            // Validar senha
            var correct = bcrypt.compareSync(passwordadm, user.passwordadm);
            if (correct) {
                req.session.user = {
                    id: user.id,
                    emailadm: user.emailadm,

                }
                res.redirect("/grade");
            } else {
                res.redirect("/admingrade");
            }

        } else {
            res.redirect("/admingrade");
        }
    });

});

//Rota autenticação de Usuario ADM - Horarios
router.post("/admhorario", (req, res) => {
    var emailadm = req.body.emailadm;
    var passwordadm = req.body.passwordadm;
    User.findOne({ where: { emailadm: emailadm } }).then(user => {
        if (user != undefined) { // Se existe um usuário com esse e-mail
            // Validar senha
            var correct = bcrypt.compareSync(passwordadm, user.passwordadm);
            if (correct) {
                req.session.user = {
                    id: user.id,
                    emailadm: user.emailadm,

                }
                res.redirect("/horario");
            } else {
                res.redirect("/adminhorario");
            }

        } else {
            res.redirect("/adminhorario");
        }
    });

});


//Rota autenticação de Usuario ADM - Usuarios
router.post("/admusuario", (req, res) => {
    var emailadm = req.body.emailadm;
    var passwordadm = req.body.passwordadm;
    User.findOne({ where: { emailadm: emailadm } }).then(user => {
        if (user != undefined) { // Se existe um usuário com esse e-mail
            // Validar senha
            var correct = bcrypt.compareSync(passwordadm, user.passwordadm);
            if (correct) {
                req.session.user = {
                    id: user.id,
                    emailadm: user.emailadm,

                }
                res.redirect("/usuarios");
            } else {
                res.redirect("/adminusuario");
            }

        } else {
            res.redirect("/adminusuario");
        }
    });

});



module.exports = router;