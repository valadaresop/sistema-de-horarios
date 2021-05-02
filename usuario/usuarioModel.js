const Sequelize = require('sequelize');
const connection = require('../database/database');

const User = connection.define('usuarios', {
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        //allowNull: false
    },
    emailadm: {
        type: Sequelize.STRING,
        //allowNull: false
    },
    passwordadm: {
        type: Sequelize.STRING,
        //allowNull: false
    } 

});
//sync-. comando para criar a tabela no Banco
//User.sync({ force: true }).then(() => { console.log('Tabela Criada!') });
module.exports = User;


