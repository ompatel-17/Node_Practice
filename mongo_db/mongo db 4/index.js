require('dotenv').config()
const express = require('express')
const app = express()
port = 5050
const expressLayout = require('express-ejs-layouts')

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

//static files
app.use(express.static('public'))

//Templating Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

//Home page
app.get('/', (req, res) => {

    const locals = {
        title : 'NodeJS',
        description : 'Free NodeJS Management System'
    }
    res.render('index', locals)
})

app.listen(port, () =>{
    console.log(`Server is Listening on port ${port}`)
})