const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10

const userSchema = new Schema({
    email: {
        type: String, 
        require: true,
        unique: true,
        lowercase: true
    }, 
    password: {
        type: String,
        require: String,
        minLength: 6
    }
})

userSchema.pre

const User = mongoose.model('User', userSchema)

module.exports = User