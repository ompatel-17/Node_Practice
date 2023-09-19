require("dotenv").config()
const express = require('express')
const app = express()
const dbconnect = require('./dbconnect')
const router = require('./routes/routers')
const port = 3030

app.use(express.json())
app.use('/api/user', router)



app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}`)
})