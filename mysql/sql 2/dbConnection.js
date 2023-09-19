const{DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME} = process.env 
const mysql = require('mysql')

const db = mysql.createConnection({
    host : DB_HOST, 
    user : DB_USERNAME,
    password : DB_PASSWORD,
    database : DB_NAME
})

db.connect((err) => {
    if(err){
        throw err
    }
    else{
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    }
})

module.exports = db