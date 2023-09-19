const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new employeeSchema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : String
    },
    city : {
        type : String
    }
})

module.exports = mongoose.model('Employee', employeeSchema)