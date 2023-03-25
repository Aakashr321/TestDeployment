const express = require("express");
const app = express();
const productsRouter = require("./api/routes/products");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

// app.use((req,res)=>{
//     res.status(200).json({
//         msg: "This is a simple GET request"
//     })
// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use(morgan("dev"));

const uri = process.env.mongoConnection;

mongoose.connect(uri).then(() => {
  console.log("Connection established successfully");
});

app.use("/products", productsRouter);

module.exports = app;
