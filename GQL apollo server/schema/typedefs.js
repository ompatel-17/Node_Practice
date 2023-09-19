const {gql} = require('apollo-server-express')

const typedefs= gql
`
  type user { 
    id : ID!
    name : String!
    age : Int!
  }

  type student_details{
    id : ID!
    name : String!
    department : String!
    en_no : Int!
    email_id : String!
    mobile_no : Int!
  }
  
  type Query {
    users : [user!]!
    student_details : [student_details!]
  }

  type Mutation{
    createuser(name: String!, age: Int!) : [user!]
    updateuser(id: ID!, name: String!, age: Int!) : [user!]
    deleteuser(id: ID!) : [user!]

    createstudent_details(name : String!, department : String!, en_no : String!, email_id : String!, mobile_no : String!) : [student_details!]
    updatestudent_details(id : ID!, name : String!, department : String!, en_no : String!, email_id : String!, mobile_no : String!) : [student_details!]
    deletestudent_details(id:ID!) : [student_details]!
  }
  
`

module.exports = typedefs