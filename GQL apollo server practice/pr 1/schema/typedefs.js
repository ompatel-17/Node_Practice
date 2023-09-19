const {gql} = require('apollo-server-express')

const typedefs = gql `
    type student_details {
        name : String!
        enrollment_no : String!
        department : String!
        year : Int!
        email_id : String!
        mobile_no : Float!
    }
    
    type Query {
        student_details : [student_details!]!
    }`


module.exports = typedefs