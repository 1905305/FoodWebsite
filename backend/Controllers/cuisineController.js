const Dishescuisine = require("../models/Cuisine");

const getcuisinefood = (req, res) => {
  Dishescuisine.find()
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
  getcuisinefood,
};
