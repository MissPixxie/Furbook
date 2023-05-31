const mongoose = require('mongoose');

const ImagesSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String,
    }
    },
{
collection: 'images'
});

module.exports = mongoose.model('Images', ImagesSchema);