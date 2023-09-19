const user = require('../models/user')
const User = require('../models/user')
const {validationResult} = require('express-validator')
var jwt = require('jsonwebtoken')
var expressjwt = require('express-jwt')
const { use } = require('../routes/user')

exports.signup = (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty())
    {
        return res.status(400).json({error: errors.array()[0].msg })
    }

    const user = new User(req.body)
    user.save((err, user) => {
        if(err)
        {
            return res.status(400).json({error: "Unable to add user"})
        }
        return res.json({ message : "Success", user})
    })
} 


exports.signin = (req, res) => {
    const {email, password} = req.body

    User.findOne({email}, (err, email) => {
        if(err || !email) {
            return req.status(400).json({error : "Email was not find"})
        }

        //Authenticate user
        if(!user.authenticate) {
            return res.ststus(400).json({error : "Email or Password Does not match"})
        }

        //create token
        const token = jwt.sign({_id: user._id}, process.env.secret)

        //put token in cookie
        res.cookie('token', token, {expire: new Date() + 1})

        //send response 
        const {_id, name, } = user
        return res.json({
            token,
            user : {
                _id,
                name,
                email
            }
        })
    })
}


exports.signout = (req, res) => {
    res.clearCookie("token")
    return res.json({ message: "User signout Successfully"})
}