const database = require("./mtdatabase")
const {DataTypes} = require("sequelize")

const userModel = database.define('User', {
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    mail:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = userModel
