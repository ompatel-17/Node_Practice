const express = require('express')
const mongoose = require('mongoose')
const app = express ()
const port = 6000
const cors = require('cors')
const db = require('./db')
const routes = require('./routes/routes')

app.use(cors())
app.use(express.json())

app.use('/api', routes)


app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}`)
})