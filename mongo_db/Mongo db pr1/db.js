const mongoose = require('mongoose')

mongoose.connect(process.env.URL
).then(() => {
    console.log("Connected Successfully")
}).catch((err) =>{
    console.log(err)
})