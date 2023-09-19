const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId
const Employee = require('../model/employee.model')

router.get('/', (req,res) =>{
    Employee.find()
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id) == false)
    
        res.status(400).json({error : "Given Id is not valid"})
    else
        Employee.findById(req.params.id)
            .then(data => {
                if (data)
                    res.send(data)
                else
                    res.status(404).json({error: 'No record found '})
        })
})

router.post('/', (req, res) => {
    Employee.create(req.body)
        .then(data => res.send("Created successfully"))
        .catch(err => console.log(err))
})

module.exports = router