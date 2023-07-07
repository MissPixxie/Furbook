var express = require("express");
var router = express.Router();
const User = require("../models/UsersModel");

router.post("/", async (req, res) => {
  try {
    const email = req.body.email;
    const userExists = await User.findOne({ email: email });
    console.log(userExists);
    const user = {
      ID: userExists._id,
      email: userExists.email,
      name: userExists.name,
    };
    if (userExists) {
      // console.log('User exists')
      let svar = { message: "User exists", user: user };
      res.status(200).json(svar);
    } else {
      let svar = { message: "User does not exists" };
      res.status(404).json(svar);
    }
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
