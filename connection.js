const mongoose = require('mongoose')
let connectMongoDB = async ()=> mongoose.connect('mongodb://127.0.0.1:27017/users')
.then((x)=>console.log('connection successful'))
.catch((x)=>console.log('Error connecting to the DataBase'))
module.exports = {connectMongoDB}