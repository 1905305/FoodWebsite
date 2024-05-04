const DishesModel = require("../models/Dishes");

const getProducts = (req, res) => {
  DishesModel.find()
    .then((items) => {
      console.log(items);
      return res.send(items);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("An error occurred while fetching dishes.");
    });
};

module.exports = {
  getProducts,
};
