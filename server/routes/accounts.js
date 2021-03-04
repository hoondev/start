const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async(req, res, next) => {
    res.send('Test')
})

router.post('/signup', async(req, res, next) => {
    const { email, password } = req.body
    try {
        const user = new User()
        user.email = email
        user.password = password
        await user.save()
    } catch (error) {
       console.log(error) 
    }
})

module.exports = router