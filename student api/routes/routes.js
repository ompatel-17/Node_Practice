const express = require('express')
const router = express.Router()
const Student = require('../models/model')

//find all students
router.get('/student/getall', async (req, res) => {
    try {
        const data = await Student.find()
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

//find student with specific id
router.get('/student/getbyid/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Student.findById(id)
        res.status(200).json(data)


    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

//add student to database
router.post('/student/add', async (req, res) => {
    try {
        const student = new Student({
            name : req.body.name,
            age : req.body.age,
            email : req.body.email
        })
        student.save()
         res.status(200).json(student)

    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

//update student
router.put('/student/update/:id', async (req, res) => {
    try {
        id = req.params.id
        data = req.body
        const options = {new : true}
        const result = await Student.findByIdAndUpdate(id, data, options)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})

//Delete student
router.delete('/student/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const result = await Student.findByIdAndRemove(id) 
        res.status(200).json({message : "Deleted Successfully"})
        
    } catch (error) {
        res.status(500).json({error : error.mwssage})
    }
})



module.exports = router