const Sequelize = require('sequelize')
const dbName = 'my database'
const dbUser = 'root'
const dbPassword = ''

const sequelize = new Sequelize(dbName, dbUser, dbPassword,{
    host : 'localhost',
    port : 3306,
    dialect : 'mysql'
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.customers = require('./model')(sequelize, Sequelize)

module.exports = db