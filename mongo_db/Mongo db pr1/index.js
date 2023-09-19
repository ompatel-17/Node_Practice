require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const port = 5050
const connect = require('./db')

app.use(cors())
app.use(express.json())




app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})