const {Sequelize} = require("sequelize")
module.exports = new Sequelize('postgres://user:uspass@localhost:5432/postgres');
