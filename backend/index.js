const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const userRoutes = require("../backend/Routes/userRoutes");
app.use("/api/users", userRoutes);

const productRoutes = require("../backend/Routes/productRoutes");
app.use("/api/products", productRoutes);

mongoose
  .connect(
    "mongodb+srv://t2605029:j0YYDXuRYfOQicT2@cluster0.7mszbao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
