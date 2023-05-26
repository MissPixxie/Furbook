var express = require('express');
var router = express.Router();
const DogsModel = require('../models/DogsModel')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const dogs = await DogsModel.find({});
    res.send(dogs);
  }
  catch (error) {
    console.error(error)
  }
});

module.exports = router;