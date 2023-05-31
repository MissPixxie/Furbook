const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    place: {
        type: String,
    },
    description: String,
    typeOfEvent: String,
    time: String,
    attending: {},
    comments: {
        commentTitle: {
            type: String,
        },
        commentsText: {
            type: String,
        }
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    }
    },
    {
    collection: 'events'
});


module.exports =  mongoose.model('Event', EventsSchema);