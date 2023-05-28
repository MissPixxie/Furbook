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

router.get('/', async (req, res) => {
  try {
    console.log(req.body.email)
    const user = req.body.email;
    const userExists = await User.findOne({email: user});
    if (userExists) {
      // console.log('User exists')
      let svar = { message: 'User exists'};
      res.status(200).json(svar);
    }
    else {
      let svar = { message: 'User does not exists'};
      res.status(404).json(svar); 
    }
  }
  catch (error) {
    console.log(error.message)
  }
});

module.exports = router;