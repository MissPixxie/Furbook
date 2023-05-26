var mongoose = require('mongoose');

var DogsSchema = new mongoose.Schema({
Name: String,
Age: String,
Sex: String,
Breed: String
},
{
collection: 'dogs'
});

module.exports = mongoose.model('DogsModel', DogsSchema);