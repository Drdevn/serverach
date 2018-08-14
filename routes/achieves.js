const express = require('express');
const router = express.Router();
const Achieve = require('../models/achieve');
const mongoose = require('mongoose');
const db = "mongodb://normpoc:normpoc1@ds139690.mlab.com:39690/achievesdb";
mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
  }
});

router.get('/ach/:id', (req, res) =>{
  Achieve.findById(req.params.id)
    .then(achieves => {
      if (!achieves) {
        return res.status(404).end();
      }
      return res.status(200).json(achieves)
    })
    .catch(err => console.log(err));
});

router.get('/ach', (req, res) => {
  Achieve.find({})
    .exec((err, achs) => {
      if (err) {
        console.log(error)
      } else {
        res.json(achs)
      }
    })
});


router.post('/addach', (req, res) => {
  let achData = req.body;
  let achieve = new Achieve(achData);
  achieve.save((error, registeredAchieve) => {
    if (error) {
      console.log(error)
    } else {
      console.log(req.body);
      res.status(200).send(registeredAchieve)
    }
  })
});

router.put('/modifyachieve/:id', (req, res) => {
  Achieve.findByIdAndUpdate(req.params.id, req.body,
    {
      new: true
    },
    (err, modach) =>{
      if (err) {
        res.send("error")
      } else {
        res.send(modach)
      }
    }
  )
});


module.exports = router;
