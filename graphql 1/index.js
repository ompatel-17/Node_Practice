const express = require('express')
const app = express()
const {GraphQLObjectType, GraphQLNonNull , GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const port = 5000


var movies = [
    { id : 1, title : "inception", auther : "aaa", release_year : 2010 },

    { id : 2, title : "avenger", auther : "marvel", release_year : 2012 },

    { id : 3, title : "iron_man", auther : "bbb", release_year : 2008 },
    
    { id : 4, title : "iron_man_2", auther : "ccc", release_year : 2010 },

    { id : 5, title : "avanger_age_of_ultron", auther : "ddd", release_year : 2015,}
]
    

var owners = [
        { id : 1, name : 'Patel & Sons' },
        
        { id : 2, name : 'Dhirubhai Ambani' },

        { id : 3, name : 'Varshil Patel' },

        { id : 4, name : 'Dhrupal Patel' },
        
        { id : 5, name : 'Wedowebapp' }
]
      
    
var websites = [
        { id : 1, name : 'google', ownerid : 2},

        { id : 2, name : 'facebook', ownerid : 3 },

        { id : 3, name : 'amezon', ownerid : 5 },

        { id : 4, name : 'github', ownerid : 9 },

        { id : 5, name : 'Medium', ownerid : 10 },

        { id : 6, name : 'lenovo', ownerid : 45 },

        { id : 7, name : 'dell', ownerid : 54 },

        { id : 8, name : 'metro money', ownerid : 20 },

        { id : 9, name : 'instagram', ownerid : 25 },

        { id : 10, name : 'skype', ownerid : 16 }
]


const moviesType = new GraphQLObjectType({
    name : 'movies',
    description : 'This Represent Movies Info',
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt) },
        title : { type : new GraphQLNonNull(GraphQLString) },
        auther : { type : new GraphQLNonNull(GraphQLString) },
        release_year : { type : new GraphQLNonNull(GraphQLInt) }
    })
})


const ownersType = new GraphQLObjectType({
    name : 'owners',
    description : 'This Represent owner Info',
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt) },
        name : { type : new GraphQLNonNull(GraphQLString) }
    })
})


const websitesType = new GraphQLObjectType({
    name : 'websites',
    description : 'This Represent Website Info.',
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt) },
        name : { type : new GraphQLNonNull(GraphQLString) },
        ownerid : { type : new GraphQLNonNull(GraphQLString) }
    })
})


const RootqueryType = new GraphQLObjectType({
    name : 'query',
    description : 'Rootquery',
    fields : () => ({
        movies : {
            type : new GraphQLList(moviesType),
            description : 'List of all movies',
            resolve : () => movies
        },
        owners : {
            type : new GraphQLList(ownersType),
            description : 'List of all owners',
            resolve : () => owners
        },
        websites : {
            type : new GraphQLList(websitesType),
            description : 'List of all websites',
            resolve : () => websites
        },
        
    })
})


const schema = new GraphQLSchema({
    query : RootqueryType
})


app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema : schema
}))


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})