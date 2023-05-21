//serv part
const express = require('express')
const cors = require('cors')

const serv = express()
const port = 3000
serv.use(express.json())

//db_part

const database = require("./mtdatabase")
const DataTypes = require("sequelize")
const userModel = require("./userModel")

const sign_up = async (newName, newMail, newPass) => {// creating user
    try {
        await database.authenticate()
        console.log("Data connection established")
        await database.sync()
    } catch (err) {
        console.log("error")
        console.log(err)
    }

    const user = await userModel.create({
        username: newName,
        mail: newMail,
        password: newPass
    })


}
//server_part
const sign_up_F = async (newName, newMail, newPass) => {// checking user
    try {
        await database.authenticate()
        console.log("Data connection established")
        await database.sync()
    } catch (err) {
        console.log("error")
        console.log(err)
    }



    const userNameCh = await userModel.findOne({
        where:{
            username: newName
        }
    })
    const userMailCh = await userModel.findOne({
        where:{
            username: newName
        }
    })
    if(userNameCh === null && userMailCh === null){
        sign_up(newName, newMail, newPass)
    }
    else {
        console.log("user exist")
    }
}

serv.use(cors({
    origin: ['http://localhost:63342']
}))


serv.listen(port, () => {
})

serv.get('/api/sign_up', cors(), (req, res) => {//create user
    //res.sendfile("test1.html")
    res.sendfile("test1.html")//to sign_up
})

serv.post('/api/sign_up', cors(), (req, res) => {//create user
    const body = req.body
    sign_up_F(body.name, body.mail, body.password)
    console.log(body.name + " " + body.mail +  " " + body.password)
    return res.send(body.name + " " + body.mail + " " + body.password)
})