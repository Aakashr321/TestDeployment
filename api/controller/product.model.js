const mongoose = require("mongoose");
const Product = require("../model/product");

//R from CRUD
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      msg: "All documents fetched successfully",
      data: products,
    });
  } catch (err) {
    res.status(501).json({
      code: 11,
      msg: "Something went wrong",
      err: err,
    });
  }
};

//C from CRUD
exports.createProduct = async (req, res) => {
  try {
    //create a product object
    const product = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      price: req.body.price,
    });
    const data = await product.save(); //call tje save method and wait for it to return
    //if it reaches this point, meanse save() was successful
    res.status(200).json({
      msg: "Product created successfully",
      product: data,
    });
  } catch (err) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: err,
    });
  }
};

//R from CRUD with an Id

exports.getProductById = async (req, res) => {
  try {
    let message = ""
    const id = req.params.productId;
    const product = await Product.findById(id); //Get a single product from the collection
    if(product === null){
        message = "No matching document found"
    }else {
        message = "Document fetched successfully"
    }
    res.status(200).json({
      msg: message,
      data: product,
    });
  } catch (err) {
    res.send(501).json({
      code: 13,
      msg: "Something went wrong",
      err: err,
    });
  }
};

//U from CRUD[PUT]
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.productId
    const data = await Product.findByIdAndUpdate(id, req.body)

    res.status(200).json({
      msg: "Product updated successfully",
      product: data,
    });
  } catch (err) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: err,
    });
  }
};
//D from CRUD
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.productId
    const data = await Product.findByIdAndDelete(id, req.body)

    res.status(200).json({
      msg: "Product deleted successfully",
      product: data,
    });
  } catch (err) {
    res.status(501).json({
      code: 10,
      msg: "Something went wrong",
      err: err,
    });
  }
};
