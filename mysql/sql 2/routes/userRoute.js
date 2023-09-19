const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const { signUpValidation }  = require('../helpers/validation')


router.post('/register', signUpValidation, userController.register)


module.exports = router