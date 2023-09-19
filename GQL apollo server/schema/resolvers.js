const db = require('../db')

const resolvers = {
  Query: {
    users: async() => {
      const [rows] = await db.query('SELECT * FROM users')
      return rows
    },
    student_details : async () => {
      const [rows] = await db.query('SELECT * FROM student_details')
      return rows
    }
  },

  Mutation: {
    createuser : async (_, {name, age}) =>{
      const [result] = await db.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age])
      const [user] = await db.query('SELECT * FROM users WHERE id=?',[result.insertId])
      return user
    },

    updateuser: async (_, {id, name, age}) =>{
      const[user] = await db.query('SELECT * FROM users WHERE id=?', [id])
      await db.query('UPDATE users SET name=?, age=?, WHERE id=?', [name, age, id])
      return user
    },

    deleteuser: async (_, {id}) =>{
      const [user] = await db.query('SELECT * FROM users WHERE id=?', [id])
      await db.query('DELETE FROM users WHERE id=?', [id])
      return user
    },

    createstudent_details : async (_, {name, department, en_no, email_id, mobile_no}) => {
      const [result] = await db.query('INSERT INTO student_details (name, department, en_no, email_id, mobile_no) VALUES (?,?,?,?,?)', [name, department, en_no, email_id, mobile_no])
      const[student_details] = await db.query('SELECT * FROM student_details WHERE id=?', [result.insertId])
      return student_details
    },

    updatestudent_details : async (_, {id, name, department, en_no, email_id, mobile_no}) => {
      const [student_details] = await db.query('SELECT * FROM student_details WHERE id=?', [id])
      await db.query('UPDATE student_details SET name=?, department=?, en_no=?, email_id=?, mobile_no=?', [name, department, en_no,email_id, mobile_no])
    },
    
    deletestudent_details : async(_, {id}) => {
      const [student_details] = await db.query('SELECT * FROM student_details WHERE id=?', [id])
      await db.query('DELETE FROM student_details WHERE id=?', [id])
      return student_details
    }
  }
}

module.exports = resolvers