const express = require('express');
const router = express.Router();
const Group = require('../models/groups');
const mongoose = require('mongoose');
const db = "mongodb://normpoc:normpoc1@ds139690.mlab.com:39690/achievesdb";
mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
  }
});


router.get('/admincon/:id', (req, res) => {
  const auth = req.body.id;
  console.log(auth);
  Group.find({}).exec((error, group) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(group)
    }
  })
});

router.put('/join/:id', (req, res) => {
  Group.findByIdAndUpdate(req.params.id, req.body._id,
    {
      new: true
    },
    (err, joinGroup) => {
      if (err) {
        res.send("error")
      } else {
        res.send(joinGroup)
      }
    }
  )
});

router.post('/addgroup', (req, res) => {
  console.log(req);
  let groupData = req.body;
  let group = new Group(groupData);
  group.save((error, registeredGroup) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(registeredGroup)

    }
  })
});

router.get('/grouplist', (req, res) => {
  Group.find({})
    .exec((err, groups) => {
      if (err) {
        console.log(error)
      } else {
        res.json(groups)
      }
    })
});


router.get('/group/:id', (req, res) => {
  Group.findById(req.params.id)
    .then(groups => {
      if (!groups) {
        return res.status(404).end();
      }
      return res.status(200).json(groups)
    })
    .catch(err => console.log(err));
});


module.exports = router;
