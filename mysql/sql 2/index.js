require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./dbConnection')
const userRouter = require('./routes/userRoute')
const app = express()
const port = 4040


app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(cors())

app.use('/api', userRouter)


app.listen(port, () =>{
    console.log(`SERVER LISTENING ON PORT ${port}`)
})