const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const user = require("../backend/Routes/userRoutes");
app.use("/api", user);

const products = require("../backend/Routes/productRoutes");
app.use("/api", products);

mongoose
  .connect(
    "mongodb+srv://rah283507:3mKXkIlEY2mBlYLu@cluster0.t9jgdcf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("conneced"));

app.listen(port, () => {
  console.log("Example app listeining on port {port}");
});
