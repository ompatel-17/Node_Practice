const {check} = require('express-validator')


exports.signUpValidation = [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail().normalizeEmail({gmail_remove_dots : true}),
    check('password', 'password is required(password length should be at least 6 characters)').isLength({min : 6})
]