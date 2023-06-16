const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
    },
    password: {
      type: String,
      //   required: true,
    },
    country: String,
    city: String,
    messages: {},
    dogs: {},
    savedPlaces: {},
    savedPosts: {},
    savedEvents: {},
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", UsersSchema);
