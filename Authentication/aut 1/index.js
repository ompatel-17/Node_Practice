const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000
require('dotenv').config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoutes = require('./routes/user')

//connect to database
mongoose.connect(process.env.db, { useNewUrlParser : true, })
.then(() => { console.log("DATABASE CONNECTED...") })
.catch(() => { console.log("UNABLE TO CONNECT") })

//middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


//routes
app.use('/api', userRoutes)


app.listen(port, () =>{
    console.log(`Server Running on Port ${port}`)
})
