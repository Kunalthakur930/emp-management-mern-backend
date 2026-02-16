const mongoose = require('mongoose')
const db="mongodb+srv://thakurkunal:Kunal%409972@cluster0.ogfbzdf.mongodb.net/?appName=Cluster0"
mongoose.connect(db,{

}).then(()=>console.log("mongodb connected")).catch((error)=>{
  console.log("error message")
}

)

