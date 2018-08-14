const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Icon = require('../models/icons');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const db = "mongodb://normpoc:normpoc1@ds139690.mlab.com:39690/achievesdb";
const jwtDecode = require('jwt-decode');
mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('Connected to mongodb')
  }
});


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized requess')
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized requess')
  }
  let payload = jwt.verify(token, 'secretKey');
  if (!payload) {
    return res.status(401).send('Unauthorized requess')
  }
  req.userId = payload.subject
}

router.get('/', (req, res) => {
  res.send('From API')
});
router.get('/icons', (req, res) => {
  Icon.find({})
    .exec((err, icons) => {
      if (err) {
        console.log(error)
      } else {
        res.json(icons)
      }
    })
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    } else {
      let payload = {subject: registeredUser.id};
      let token = jwt.sign(payload, 'secretKey');
      res.status(200).send({token})
    }
  })
});

router.post('/login', (req, res) => {
  let userData = req.body;
  User.findOne({email: userData.email}, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      }
      else if (user.password !== userData.password) {
        res.status(401).send('Invalid password')
      } else {
        let payload = {subject: user.id};
        let token = jwt.sign(payload, 'secretKey');
        res.status(200).send({token})
      }
    }
  })
});


module.exports = router;
