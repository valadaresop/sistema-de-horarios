const Sequelize = require('sequelize');
const connection = require('../database/database');

const Professor = connection.define('professores', {
    nomep: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    prefdp: {
        type: Sequelize.STRING(30),
        //allowNull: false
    },
    turnop: {
        type: Sequelize.STRING(20),
        //allowNull: false
    },
    semanap: {
        type: Sequelize.STRING(20),
        //allowNull: false
    },
    anteriorp: {
        type: Sequelize.STRING(50),
        //allowNull: false
    },
    obsp: {
        type: Sequelize.STRING(80),
        //allowNull: false
    },
    slug:{
    type: Sequelize.STRING,
    allowNull: false

}
});
//sync-. comando para criar a tabela no Banco
//Professor.sync({ force: true }).then(() => { console.log('Tabela Criada!') });
module.exports = Professor;
