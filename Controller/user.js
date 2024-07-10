const user = require('../Models/user')
const addUser = async (req,res)=>{
    const body = req.body
    const result = await user.create({
       name: body.name,
       age: body.age,
       gpa: body.gpa,
       memeber: body.member,
       id: body.id
   })
res.send(`user created with the id: ${result._id}`)
}
const editUser = async (req,res)=>{
    await user.updateOne({id:req.body.id},{$set:{name:req.body.name}})
    try{
        res.send('User updated')
    
    }catch(err){
        res.send('there was an error')
    }
}
const deleteUser = async (req,res)=>{
    let id = req.body.id
    await user.deleteOne({age: {$lt: 25}})
    res.send('User deleted')
}
const getAllUsers = async(req,res)=>{
   let users = await user.find({})
   return res.send(users)
}
const getUser = async(req,res)=>{
    let id = Number(req.params.id)
    let RequestedUser = await user.find({id})
    try{
        res.send(RequestedUser)
    }catch(err){
        res.send('could not find the user')
    }
}
module.exports = {getAllUsers,getUser,editUser,deleteUser,addUser}