require('dotenv').config()
require('./config/db')
const bodyparser = require('body-parser')
const express = require('express')
const app = express()
const port = 3030
const UserRouter = require('./route/UserRoute')



app.use(express.json())
app.use(bodyparser.json())


app.use('/user', UserRouter)


app.listen(port, () => {
    console.log(`server listening on ${port}`)
})