const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb://normpoc:normpoc1@ds139690.mlab.com:39690/achievesdb";

mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
  }
});


router.get('/getAllUsers', (req, res) => {
  User.find({})
    .exec((err, users) => {
      if (err) {
        console.log(error);
      } else {
        res.json(users)
      }
    })
});

router.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(users => {
      if (!users) {
        return res.status(404).end();
      }
      console.log(req);
      return res.status(200).json(users);
    })
    .catch(err => console.log(err));
});

router.put('/update/:id', (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, req.body

    , {
      new: true
    },
    (err, updatedUser) => {
      if (err) {
        res.send("Error")

      } else {
        res.send(updatedUser);
        console.log(req)
      }
    }
  )
});



module.exports = router;
