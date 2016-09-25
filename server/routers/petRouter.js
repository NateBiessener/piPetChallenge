//create router
var express = require('express');
var router = express.Router();
//bring in mongoose
var mongoose = require('mongoose');
//bring in Schema
var Pet = require('../models/pet');

//find and return all pets
router.get('/pet', (req, res) => {
  console.log('in pet get');
  Pet.find({}, (err, results) => {
    if (err){
      console.log('pet get err:', err);
      res.sendStatus(500);
    }
    else {
      res.send(results);
    }
  })//end Pet.find callback
});//end /all get

router.post('/pet', (req,res) => {
  console.log('in pet post', req.body);
  console.log('Pet Schema:', Pet);
  //assemble newPet
  var newPet = new Pet({
    name: req.body.name,
    animal: req.body.animal,
    age: req.body.age,
    image: req.body.image
  });
  newPet.save((err) => {
    console.log('saving newPet:', newPet);
    if (err){
      console.log('pet post err:', err);
      res.sendStatus(500);
    }
    else {
      console.log('newPet saved');
      res.sendStatus(201);
    }
  });
});


//delete route to clear db during testing
router.delete('/pet', (req,res) => {
  Pet.remove({}, (err)=>{
    if(err){
      console.log(err);
      res.sendStatus(500);
    }
    else {
      res.sendStatus(200);
    }
  })
})

module.exports = router;
