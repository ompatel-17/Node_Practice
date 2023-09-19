require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.Uri
).then(() => {
    console.log("Database connected Successfully...")
}).catch((err) => {
    console.log(err)
})