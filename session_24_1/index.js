// import express from 'express'
let express = require('express')

// import mongoose from 'mongoose'
let mongoose = require('mongoose')
let cors = require('cors')
// import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/userprofile', {
    useNewUrlParser: true,
    useUnifiedTopologyLtrue: true
}, () => {
    console.log('db connected')
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = new mongoose.model('User', userSchema)

// Routes
app.post('/register', (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email, password }, (err, user) => {
        if (user) {
            res.send({ message: 'user already exist' })
        } else {
            const user = new User({
                name, email, password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "successfully registered" })
                }
            })
        }
    })
})

app.listen(9000, () => {
    console.log('backend started succesfully')
})