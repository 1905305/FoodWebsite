const mongoose = require("mongoose");

const Dishescuisine = mongoose.model("cuisine", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = Dishescuisine;
