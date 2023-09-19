const db = require('./db')

const resolvers = {
    Query : {
        student_details : async () => {
            const [rows] = await db.query('SELECT * FROM student_details')
            return rows
        }
    }
}

module.exports = resolvers