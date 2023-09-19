const express = require('express')
const app = express()
const mysql = require('mysql')
const {ApolloServer} = require('apollo-server-express')
const typedefs = require('./schema/typedefs')
const resolvers= require('./schema/resolvers')
const port = 8000


async function startserver() {
    const apolloServer = new ApolloServer({typeDefs: typedefs, resolvers})
    await apolloServer.start()
    apolloServer.applyMiddleware({app})
}
startserver()



app.listen(port, () =>{
    console.log(`Server is listenung on port ${port}.....`)
})