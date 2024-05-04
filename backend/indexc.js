const express = require("express");
const app = express();
const port = 3002;

app.use(express.json());

// Define route for the index page
app.get("/", (req, res) => {
  res.send("Welcome to the index page!");
});

// Define route for handling POST requests to /products
app.post("/products", (req, res) => {
  // Process the request body
  const requestBody = req.body;
  // Perform any necessary operations with the request body

  // Send a response
  res.send("POST request to /products route handled successfully!");
});

// Define route for handling GET requests to /products/:id
app.get("/products/:id", (req, res) => {
  // Extract product ID from request parameters
  const productId = req.params.id;
  // Perform any necessary operations with the product ID

  // Send a response
  res.send(`GET request to /products/${productId} route handled successfully!`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
