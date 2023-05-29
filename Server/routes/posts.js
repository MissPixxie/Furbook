var express = require('express');
var router = express.Router();
const PostsModel = require('../models/PostsModel');


router.get('/', async function(req, res) {
    try {
      const posts = await PostsModel.find({});
      console.log(posts);
      res.send(posts);
    }
    catch (error) {
      console.error(error)
    }
  });
  
  module.exports = router;