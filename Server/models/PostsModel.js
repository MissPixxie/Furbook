const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    text: {
        type: String,
    },
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
    collection: 'posts'
});


module.exports =  mongoose.model('Post', PostsSchema);