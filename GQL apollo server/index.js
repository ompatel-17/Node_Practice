const express = require('express')
const app = express()
const mysql = require('mysql')
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./schema/typedefs')
const resolvers = require('./schema/resolvers')
const port = 5000


async function startServer() {
  const apolloServer = new ApolloServer({typeDefs, resolvers});
  await apolloServer.start();
  apolloServer.applyMiddleware({app})
}
startServer();


app.listen(port, ()=>{
  console.log(`Server is listening on ${port}`)
})




// const db = mysql.createConnection({
//   host: 'localhost',
//   user : 'root',
//   password: '',
//   database : 'my database'
// })

// db.connect(err, () => {
//   if (err)
//   {
//     throw err
//   }
//   console.log('database connected')
// })


// const server = new ApolloServer({resolvers: resolvers,
//   typeDefs: typedef})

// server.applyMiddleware({app})