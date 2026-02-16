const mongoose = require('mongoose')
const empSchema=new mongoose.Schema({
  name:String,
  email:String,
  salary:String,
  role:String,
  age:String
})
const emp=mongoose.model('emp',empSchema)

module.exports=emp