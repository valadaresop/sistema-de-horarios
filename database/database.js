const Sequelize = require("sequelize");

const connection = new Sequelize('dbaulas', 'root', '', {
    host: 'localhost',
    port: '3308',
    dialect: 'mysql',
    timezone: "-03:00"
});

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })
module.exports = connection;