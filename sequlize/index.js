const express = require('express')
const app = express()
port = 8888
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const controller = require('./controller')
const db = require('./db.config')

db.sequelize.sync()

app.post('/new/customer', (req,res) =>{
    controller.createCustomer(req, res)
})


app.get('/customers', (req, res) =>{
    controller.findAllCustomers(req, res)
})


app.get('/customers/:email', (req, res) =>{
    controller.findCustomerByEmail(req, res)
})


app.put('/customer/update', (req, res) =>{
    controller.updateCustomer(req, res)
})


app.delete('/customer/delete/:email', (req, res)=>{
    controller.deleteCustomer(req, res)
})


app.listen(port,(req, res) => {
    console.log(`server is listening on port ${port}`)
})