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


module.exports =  mongoose.model('Places', PlacesSchema);