const db = require('./db.config')
const Customer = db.customers

function createCustomer(req, res){
    if(!req.body.name || !req.body.email || !req.body.age){
        return res.status(400).send({
            message: "Bad Data"
        })
    }
    const customerObject = { 
        name : req.body.name,
        email : req.body.email,
        age : req.body.age
    }
    Customer.create(customerObject).then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send(error)
    })
}

function findAllCustomers(req, res){
    Customer.findAll().then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send(error)
    })

}

function findCustomerByEmail(req, res){
    Customer.findByPk(req.params.email).then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(500).send(error)
    })

}

function updateCustomer(req, res){
    const newData = {
        name : req.body.name,
        email : req.body.email,
        age : req.body.age    
    }
    Customer.update(newData, {where: {email: req.body.email}}
    ).then(() =>{
        res.send("updated data successfully for email: " + req.body.email)
    }).catch(error=>{
        res.status(500).send(error)
    })

}

function deleteCustomer(req, res){
    Customer.destroy({where: {email: req.params.email}}
    ).then(()=>{
        res.send("data deleted successfully for email: " + req.params.email)
    }).catch(error=>{
        res.status(500).send(error)
    })

}

module.exports = {
    createCustomer,
    findAllCustomers,
    findCustomerByEmail,
    updateCustomer,
    deleteCustomer
}  