const express = require('express')
const expressGraphQL = require('express-graphql')
const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql')
const app = express()
const port = 6060

app.use('/graphql', expressGraphQL({
    graphiql : true
}))

app.listen(port, () => {
    console.log(`SERVER IS LISTENING ON PORT ${port}...`)
})