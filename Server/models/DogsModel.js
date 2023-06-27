const mongoose = require("mongoose");
const User = require("./UsersModel");

const DogsSchema = new mongoose.Schema(
  {
    name: String,
    age: String,
    sex: String,
    breed: String,
    neutered: String,
    images: {},
    friends: {},
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  {
    collection: "dogs",
  }
);

module.exports = mongoose.model("DogsModel", DogsSchema);
