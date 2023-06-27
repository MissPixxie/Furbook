const mongoose = require("mongoose");

const PlacesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // valmöjligheter på kategorier, kanske ett listobjekt?
    category: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    collection: "places",
  }
);

PlacesSchema.statics.addReview = function (paw) {
  // try {
  //   const newReview = ReviewsShema.create({
  //     paws: paw,
  //   });
  //   newReview.save().then(() => {
  //     console.log("saved");
  //   });
  // } catch (error) {
  //   console.log(error.message);
  // }
};

module.exports = mongoose.model("Place", PlacesSchema);
