const express = require('express')
const app = express()
port = 8000
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.on('open', () => console.log('Connected to Database'))

app.listen(port, () =>{
    console.log(`server is listening on port ${port}`)
})