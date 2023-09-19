const express = require('express')
const router = express.Router()
const User = require('../model/UserModel')
const bcrypt = require('bcrypt')


//signup
router.post('/signup', (req, res) => {
    let {name, email, password} = req.body

    name = name.trim()
    email = email.trim()
    password = password.trim()

    if(name == "" || email == "" || password == "" ){
        res.json({
            status : "FAILED",
            message : "Empty Input Fields"
        })

    }else if (!'@' && password.length < 6) {
        res.json({
            status : "FAILED",
            message : "Enter Valid PAssword"
        })

    } else {
        //checking if user is already exists
        User.find({email}).then(result => {
            if(result.length){
                res.json({
                    status : "FAILED",
                    message : "User is already exists"
                })

            } else {
                
                bcrypt.hash(password, 10).then(hashedPassword => {
                    const newUser = new User({
                        name, 
                        email, 
                        password : hashedPassword
                    })

                    newUser.save().then(result => {
                        res.json({
                            status : "SUCCESS",
                            message : "signup successfully",
                            data : result
                        })
                    })


                }).catch((err) => {
                    res.json({
                        status : "FAILED",
                        mssage : "password hashing error"
                    })
                })
            }
        })

    }
})


//signin
router.post('/signin', (req, res) => {
    let {email, password} = req.body

    email = email.trim()
    password = password.trim()

    if(email == "" || password == "") {
        res.json({
            status : "FAILED",
            message : "Empty credential supplied"
        })

    } else {
        //checking user already existing
        User.find({email})
        .then(data => {
            if(data) {
                const hashedPassword = data[0].password
                 bcrypt.compare(password, hashedPassword).then(result => {

                    if(result) {
                        res.json({
                            status : "SUCCESS",
                            message : "Login Successfully",
                            data : data
                        })

                    } else {
                        res.json({
                            status : "FAILED",
                            message : "Invalid Password"
                        })
                    }
                })
                
            } else {
                res.json({
                    status : "FAILED",
                    message : "Invalid credential "
                })
            }

            
        })
    }
    
})




module.exports = router