const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
number: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    default: () => Date.now(),
}
},
{
collection: 'users'
});


module.exports =  mongoose.model('User', UsersSchema);