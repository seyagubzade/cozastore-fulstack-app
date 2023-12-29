const express = require("express");
const cors = require("cors");
const PORT = 8080;
const mongoose = require("mongoose");
const app = express();
const CozaProducts = require("./routes/CozaProducts.routes");

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/"
  )
  .then(() => {
    console.log("connected to db");
  });

app.use("/coza-products", CozaProducts);

app.listen(PORT, () => {
  console.log(`lintening to PORT ${PORT}`);
});
