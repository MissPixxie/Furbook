const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
title: {
    type: String,
    required: true,
},
text: {
    type: String,
    required: true,
},
comments: [
    
],
createdAt: {
    type: Date,
    default: () => Date.now(),
}
},
{
collection: 'posts'
});


module.exports =  mongoose.model('Post', PostsSchema);