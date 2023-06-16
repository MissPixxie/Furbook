const mongoose = require("mongoose");

const DogsSchema = new mongoose.Schema(
  {
    name: String,
    age: String,
    sex: String,
    breed: String,
    neutered: String,
    images: {},
    friends: {},
  },
  {
    collection: "dogs",
  }
);

module.exports = mongoose.model("DogsModel", DogsSchema);
