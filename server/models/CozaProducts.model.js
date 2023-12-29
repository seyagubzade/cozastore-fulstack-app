const mongoose = require("mongoose");

const CozaProducts = mongoose.model(
  "CozaProducts",
  new mongoose.Schema({
    image: String,
    title: String,
    description: String,
    price: Number,
  })
);

module.exports = { CozaProducts };
