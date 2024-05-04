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

const cuisinefood = require("../backend/Routes/cuisineRoutes");
app.use("/api", cuisinefood);

mongoose
  .connect(
    "mongodb+srv://1905305:tniI5p8M4wpPDewI@cluster0.3mhv9rh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("conneced"));

app.listen(port, () => {
  console.log("Example app listeining on port {port}");
});
