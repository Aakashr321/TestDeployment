//Create model to update data in mongodb using mongoose

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const productSchema = mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {type:String, require:true},
  price: {type:String, require:true}
});

module.exports = mongoose.model("Product",productSchema)