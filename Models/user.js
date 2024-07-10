const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true, },
         age: {type: Number,required: true},
         gpa: {type: Number, required:false},
         member:{type: Boolean,required: false},
         id:{ type:Number, required:true}
},{timestamps:true})

const user = mongoose.model("user",userSchema)
module.exports = user