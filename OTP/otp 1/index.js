require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const { match } = require('assert')
const { Twilio } = require('twilio')
const port = 6060


app.use(express.urlencoded( { extended : false }))
app.use (express.json()) 
app.use(cors()) 


const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const smsKey = process.env.SMS_SECRET_KEY
let twilioNum = process.env.TWILIO_PHONE_NUMBER


const client = require('twilio') (accountSid, authToken)

app.post('/sendotp', (req, res) => {

    const { phone } = req.body
    console.log(phone)
    const otp = Math.floor(100000 + Math.random() * 900000)  //return Math.floor(100000 + Math.random() * 900000);
    const ttl = 2 * 60 * 1000
    let expires = Date.now()
    expires = expires + ttl
    const date = `${phone}.${otp}.${expires}`
    const hash = crypto.createHmac('sha256', smsKey).update(date).digest('hex')
    const fullhash = `${hash}.${expires}`

    client.messages
        .create({
            to : phone,
            from : twilioNum,
            body : `Your OTP is ${otp}`
        })
        .then((message) => {
            res.status(200).json({phone, hash : fullhash,otp}) // {message : 'OTP send successgully'})
        })
        .catch((err) => {
            console.error('phone', err.message)
            return res.json({error : err.message})
        })

})

app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}`)
})