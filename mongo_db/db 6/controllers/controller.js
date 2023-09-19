const User = require('../model/user') 

const getAllUser = async (req, res, next) => {
    let users

    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }

    if (!users) {
        return res.status(404).jason({message : "No Users Found"})
    }

    return res.status(200).json({users})
}

module.exports = getAllUser

const signup = async (req, res, next) =>{
    const {name,email,password} = res.body

    let existingUser
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        return console.log(error)
    }

    if(existingUser){
        return res.status(400).json({message : "User Already Exists! Login Instead"})
    }

    const user = new User({
        name,
        email,
        password
    })

    try {
        await user.save()
    } catch (error) {
        return console.log(error)
    }
     return res.status(201).json({user})
}

module.exports = signup