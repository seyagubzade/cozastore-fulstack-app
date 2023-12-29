const express = require('express')
const {CozaProductsController} = require("../controllers/CozaProducts.controller")
const router = express.Router()

router.get("/", CozaProductsController.getAll)
router.get("/:id", CozaProductsController.getById)
router.post("/", CozaProductsController.add)
router.delete("/:id", CozaProductsController.delete)

module.exports = router;


