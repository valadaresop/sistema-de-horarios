const Sequelize = require('sequelize');
const connection = require('../database/database');

const Grade = connection.define('grades', {
    nomec: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    nomeg: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cargahg: {
        type: Sequelize.STRING(20),
        //allowNull: false
    },
    codigog: {
        type: Sequelize.STRING(20),
        //allowNull: false
    },
    periodog: {
        type: Sequelize.STRING(20),
        //allowNull: false
    }, slug:{
        type: Sequelize.STRING,
        allowNull: false
    }

});
//sync-. comando para criar a tabela no Banco
//Grade.sync({ force: true }).then(() => { console.log('Tabela Criada!') });
module.exports = Grade;




