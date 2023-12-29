const { CozaProducts } = require("../models/CozaProducts.model");

const CozaProductsController = {
  getAll: async (req, res) => {
    try {
      const products = await CozaProducts.find({});
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send("Not Found");
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await CozaProducts.findById(id);
      res.status(200).send(target);
    } catch (err) {
      res.status(404).send("Not Found");
    }
  },
  add: async (req, res) => {
    try {
      const { image, title, description, price } = req.body;
      const newProduct = await CozaProducts({ image, title, description, price})
      await newProduct.save();
      res.status(200).send(newProduct)
    } catch (err) {
      res.status(404).send(err);
    }
  },
  delete: async (req, res) => {
    try {
        const { id } = req.params;
        await CozaProducts.findByIdAndDelete(id)
        const products = await CozaProducts.find({})
        res.send(products).status(203)
    } catch (err) {
      res.send(err);
    }
  },
};


module.exports = {CozaProductsController}