const mongoose = require("mongoose");
const uri = "mongodb+srv://aakashr321:aakash321@cluster0.erykfij.mongodb.net/school";

mongoose.connect(uri).then(()=>{
    console.log("Connection established successfully")
})
