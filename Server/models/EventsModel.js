const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    place: {
      type: String,
    },
    description: {
      type: String,
    },
    typeOfEvent: {
      type: String,
    },
    time: {
      type: String,
    },
    attending: {},
    comments: {
      commentTitle: {
        type: String,
      },
      commentsText: {
        type: String,
      },
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    collection: "events",
  }
);

module.exports = mongoose.model("Event", EventsSchema);
