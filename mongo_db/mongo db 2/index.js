const express = require('express')
const app = express()
port = 8000
const connectDb = require('./db')
const employeeRoutes = require('./controller/employee.controller')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

connectDb().then(() =>{
    console.log('Database Connected Successfully')
}) 