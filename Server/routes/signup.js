var express = require("express");
var router = express.Router();
var User = require("../models/UsersModel");

router.post("/", async (req, res) => {
  try {
    const user = req.body.email;
    const userExists = await User.findOne({ email: user });
    if (userExists) {
      // console.log('User exists')
      let svar = { message: "User already exists" };
      res.status(404).json(svar);
    } else {
      var users = await User.create({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        password: req.body.password,
      });
      console.log(users);
      users.save().then((data) => {
        let svar = { message: "User added successfully" };
        res.status(200).json(svar);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
