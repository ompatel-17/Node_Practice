const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../dbConnection')
const { decrypt } = require('dotenv')

const register = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()})
    }

    db.query(`SELECT * FROM users_11 WHERE LOWER(email) = LOWER(${db.escape(req.body.email)})`),
    (err, result) => {
        if(result && result.length){
            return res.status(409).send({ massage : 'This user is already exist' })
        }
        else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(400).send({ massage : err})
                }
                else{
                    db.query(`INSERT INTO users_11 (name, email, password) VALUES('${req.body.name}, ${db.escape(req.body.email)}, ${db.escape(hash)})'`,
                    
                    (err,result) =>{
                        if(err){
                            return res.status(400).send({ massage : err}) 
                        }
                        else {
                            return res.status(400).send({ massage : 'the user has been registered'})
                        }
                    }
                    )
                }
            })
        }
    }
}

module.exports = {
    register
}