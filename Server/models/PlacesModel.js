const mongoose = require('mongoose');

const PlacesSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    // valmöjligheter på kategorier, kanske ett listobjekt?
    category: {
        type: String,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    reviews: {

    },
    comments: {
        commentTitle: {
            type: String,
        },
        commentsText: {
            type: String,
        }
    },
    },
{
collection: 'places'
});


module.exports =  mongoose.model('Places', PlacesSchema);