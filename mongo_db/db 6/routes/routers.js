const express = require('express')
const getAllUser = require('../controllers/controller')
const signup = require('../controllers/controller')
const router = express.Router()

router.get('/', getAllUser)

router.post('/signup', signup)


module.exports = router