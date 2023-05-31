const mongoose = require('mongoose');

const DogsSchema = new mongoose.Schema({
    Name: String,
    Age: String,
    Sex: String,
    Breed: String
    },
{
collection: 'dogs'
});

module.exports = mongoose.model('DogsModel', DogsSchema);