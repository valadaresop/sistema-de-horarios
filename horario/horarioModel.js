const Sequelize = require('sequelize');
const connection = require('../database/database');

const Horario = connection.define('horario', {
    aprovadh: {
        type: Sequelize.STRING(50),
    },
    datah: {
        type: Sequelize.STRING, 
        allowNull: true
    },
    versaoh: {
        type: Sequelize.STRING(10), 
    },
    cursoh: {
        type: Sequelize.STRING(30), 
    },
    semesth: {
        type: Sequelize.STRING(20),
    },
    blocoh: {
        type: Sequelize.STRING(10),  
    },
    periodh: {
        type: Sequelize.STRING(10),       
    }, 
    turmah: {
        type: Sequelize.STRING(30),    
    },
    turnoh: {
        type: Sequelize.STRING(20),     
    },

//Dados de Horarios

    aulah2: {
        type: Sequelize.STRING(20),        
    },
    aulah3: {
        type: Sequelize.STRING(20),        
    },
    aulah4: {
        type: Sequelize.STRING(20),        
    },
    aulah5: {
        type: Sequelize.STRING(20),        
    },
    aulah6: {
        type: Sequelize.STRING(20),        
    },
    disc2: {
        type: Sequelize.STRING(30),
    },
    prof2: {
        type: Sequelize.STRING(30),  
        
    },
    disc3: {
        type: Sequelize.STRING(30),
    },
    prof3: {
        type: Sequelize.STRING(30),  
        
    },
    disc4: {
        type: Sequelize.STRING(30),
    },
    prof4: {
        type: Sequelize.STRING(30),  
        
    },
    disc5: {
        type: Sequelize.STRING(30),
    },
    prof5: {
        type: Sequelize.STRING(30),  
        
    },
    disc6: {
        type: Sequelize.STRING(30),
    },
    prof6: {
        type: Sequelize.STRING(30),  
        
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

//sync-. comando para criar a tabela no Banco
//Horario.sync({ force: true }).then(() => { console.log('Tabela Criada!') });
module.exports = Horario;





