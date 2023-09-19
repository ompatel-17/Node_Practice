const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:1234@cluster0.tstxgcn.mongodb.net/node?retryWrites=true&w=majority"
).then(() => {
    console.log("Connected Successfully...")
}).catch((err) => {
    console.log(err)
})