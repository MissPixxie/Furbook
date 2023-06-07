var express = require('express');
var router = express.Router();
const PlacesModel = require('../models/PlacesModel');
const ImagesModel = require('../models/ImagesModel');


router.get('/', async function(req, res) {
    try {
      const posts = await PlacesModel.find({});
      console.log(posts);
      res.send(posts);
    }
    catch (error) {
      console.error(error)
    }
  });

  router.post('/newplace', async (req, res) => {
    try { 
      const getLocation = req.body.location;
      const locationExists = await PlacesModel.findOne({location: getLocation});
      if (locationExists) {
        // console.log('User exists')
        let svar = { message: 'Location already exists'};
        res.status(404).json(svar);
      }
      else if (getLocation.length === 0) {
        let svar = { message: 'Reqired field'};
        res.status(404).json(svar);
      }
      else {
        const newlocation =  await PlacesModel.create({ 
          name: req.body.name,
          category: req.body.category,
          description: req.body.description,
          location: req.body.location
        });
        console.log(newlocation)
        newlocation.save()
        .then(data => {
          let svar = { message: 'Location added successfully'};
          res.status(200).json(svar);
        })      
      }
    }
    catch (error) {
      console.log(error.message)
    }
  })
  
  module.exports = router;