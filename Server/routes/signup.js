var express = require('express');
var router = express.Router();
var User = require('../models/UsersModel')


router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    var users =  await User.create({ 
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      password: req.body.password
    });
    console.log(users)
     users.save()
    .then(data => {
      console.log(data)
      res.send('posted');
    })
  }
  catch (error) {
    console.log(error.message)
  }
})

module.exports = router;