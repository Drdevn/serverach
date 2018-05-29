const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const db = "mongodb://normpoc:normpoc1@ds139690.mlab.com:39690/achievesdb"
mongoose.connect(db, err => {
    if(err){
        console.error('Error!' + err)
    } else{
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res)=>{
    res.send('From API')
})

router.post('/register', (req,res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) =>{
        if(error){
            console.log(error)
        } else {
            let payload = {subject: registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }

    })
})

router.post('/login', (req, res) =>{
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) =>{
        if(error){
            console.log(error)
        } else{
            if(!user){
                res.status(401).send('Invalid email')
            } else 
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            } else{
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})

module.exports = router