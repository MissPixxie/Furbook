const mongoose = require('mongoose');

const PlacesSchema = new mongoose.Schema({
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
    reviews: {
        total: String,
        review: {
            paws: String,
            title: String,
            text: String,
        }
    }
    },
{
collection: 'places'
});


module.exports =  mongoose.model('Place', PlacesSchema);