const mongoose = require("mongoose");

const ReviewsShema = new mongoose.Schema({
  ratings: [],
  title: String,
  text: String,
  location: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Places",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Review", ReviewsShema);
