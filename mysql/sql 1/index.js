const express = require('express')
const app = express()
const mysql = require('mysql')
const port = 8000

// create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: 'nodesql'
})

//connect to mysql
db.connect((err, )=>{
    if(err)
    {
        throw err
    }
    console.log("Mysql connected")
})


//creat database
app.get('/creatdb',(req,res)=>{
    let sql = "CREATE DATABASE nodesql"
    db.query(sql,(err) =>{
        if(err)
        {
            throw err
        }
        res.send("database creartd")
    })
})

//creat table
app.get('/createstudent',(req, res) =>{
    let sql = "CREATE TABLE student(id int, name VARCHAR(255), department VARCHAR(255), PRIMARY KEY(id))"
    db.query(sql, (err) =>{
        if(err)
        {
            throw err
        }
        res.send("table created")
    })
})

//insert student
app.get('/student1', (req, res)=>{
    // let post = {id: 1, name: "vrshil patel", department: "IT"}
    let sql = 'INSERT INTO student value(1, "vrshil patel", "IT")'
    let query = db.query(sql,(err) =>{
        if(err)
        {
            throw err
        }
        res.send("student added")
    })
})

//select student
app.get('/getstudent', (req, res) =>{
    let sql = 'SELECT * FROM student'
    let query = db.query(sql, (err,result) =>{
        if(err)
        {
            throw err
        }
        // res.send(result)
        res.send("student detail fatched")
    })
})

//update student
app.get('/updatestudent/:id', (req,res) =>{
    // let newname = 'updated name'
    let sql = `UPDATE student SET name = 'smarth patel' WHERE id = ${req.params.id}`
    let query = db.query(sql,err =>{
        if(err)
        {
            throw err
        }
        res.send("student updated")
    })
})

//delete data
app.get('/deletstudent/:id', (req, res) =>{
    let sql = `DELETE FROM student WHERE id = ${req.params.id}`
    let query = db.query(sql, err =>{
        if(err)
        {
            throw err
        }
        res.send("record DELETE....")
    })
})

app.listen(port, (req,res) =>{
    console.log(`server is running on ${port}`)
})