const Sequelize = require("sequelize");

const connection = new Sequelize('dbaulas', 'sistemah', 'kapital71', {
   host: 'mysql743.umbler.com',
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