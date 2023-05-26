var express = require('express');
var router = express.Router();
const User = require('../models/UsersModel')

/* GET users listing. */
//router.get('/', async function(request, respons, next) {
//  try {
//    const users = await UsersModel.find({});
//    respons.send(users);
//  }
//  catch (error) {
//    console.error(error)
//  }
//});

router.get('/', async (request, respons) => {
  try {
    const users = await User.create({ Name: 'Mia'});
    await users.save();
    respons.send(users);
  }
  catch (error) {
    console.error(error)
  }
});

module.exports = router;