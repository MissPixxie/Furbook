const mongoose = require('mongoose');

const PlacesSchema = new mongoose.Schema({
place: {
    type: String,
    required: true,
},
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
    type: String,
    required: true,
},
comments: {
    type: String,
}
},
{
collection: 'places'
});


module.exports =  mongoose.model('Places', PlacesSchema);