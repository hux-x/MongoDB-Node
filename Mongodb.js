console.log('testing')
const express = require('express')
const app = express()
const db = require('mongodb')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/users').then((x)=>console.log('connection successful'))
.catch((x)=>console.log('Error connecting to the DataBase'))
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, }, age: {type: Number,required: true},gpa: {type: Number, required:false},member:
         {type: Boolean,required: false},id:{ type:Number, required:true
    }
})
const user = mongoose.model("user",userSchema)


app.use(express.json())
app.use(express.urlencoded())

app.route('/api/users/:id').get(async (req,res)=>{
    let id = Number(req.params.id)
    let RequestedUser = await user.find({id})
    try{
        res.send(RequestedUser)
    }catch(err){
        res.send('could not find the user')
    }
}).post(async (req,res)=>{
    const body = req.body
     const result = await user.create({
        name: body.name,
        age: body.age,
        gpa: body.gpa,
        memeber: body.member,
        id: body.id
    })
 console.log(result)
 res.send(`user created with the id: ${result._id}`)
}).patch(async (req,res)=>{
    
    await user.updateOne({id:req.params.id},{$set:{name:req.body.name}})
    try{
        res.send('User updated')
    
    }catch(err){
        res.send('there was an error')
    }
   
}).delete(async (req,res)=>{
    let id = req.params.id
    await user.deleteOne({age: {$lt: 25}})
    res.send('User deleted')
    
    
}).get(async(req,res)=>{
   const RequestedUser = await user.find({id: req.params.id})
   res.send(RequestedUser)

})

app.listen(5000,()=>{
    console.log('server listening ono port : 5000')
})
