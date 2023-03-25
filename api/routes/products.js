const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/product.model");
const Product = require("../model/product");

//Handle GET request for all products
router.get(
  "/",
  getProducts

  /* (req, res) => {
  res.status(200).json({
    msg: "This is a GET request for products",
  });
} */
);

//Handle POST request for product
router.post(
  "/",
  createProduct

  /* (req, res) => {
  //body parser will make the following properties available
  // console.log(req.body)
  // console.log(req.body.name)
  // console.log(req.body.price)
// const product = {
//   name : req.body.name,
//   price :req.body.price
// }

//1. Create an object of the model
const product = new Product({
  _id: new mongoose.Types.ObjectId(),
  name : req.body.name,
  price:req.body.price
})

//Save this to the mongoDB database
product.save().then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})


// const p = req.body
  res.status(200).json({
    msg: "This is a POST request for product",
    statusMsg: "Product created successfully",
    product : product
  });
} */
);

//GET request for single product
router.get(
  "/:productId",
  getProductById

  /* (req, res) => {
  const id = req.params.productId;
  if (id === "7") {
    res.status(200).json({
      msg: "Congrats you have a special id with good cashback",
    });
  } else {
    res.status(200).json({
      msg: "You have a regular id with no cashback",
    });
  }
} */
);

//Handle PUT request

router.put(
  "/:productId",
  updateProduct

  /* (req, res) => {
  const id = req.params.productId;
  res.status(200).json({
    msg: "This is a PUT request for product",
    id: id,
  });
});
*/
);

//Handle delete request

router.delete(
  "/:productId",
  deleteProduct

  /* (req, res) => {
  const id = req.params.productId;
  res.status(200).json({
    msg: "This is a delete request for product",
    id: id,
  });
} */
);

module.exports = router;
