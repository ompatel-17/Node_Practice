const express = require('express')
const router = express.Router()
const { signup } = require('../controllers/user')
const { signin } = require('../controllers/user')
const { signout } = require('../controllers/user')
const {check, validationResult} = require('express-validator')

router.post('/signup', [
    check("name", "Name atleast should be 3 character").isLength({min : 2}),
    check("email", "Email should be valid").isEmail(),
    check("password", "Passwors atleast should be 6 character").isLength({min : 6})
], signup)


router.post('/signin', signin)

router.post('/signout', signout)


module.exports = router