const express = require('express')
const app = express()
const port = 3000
const mongodb = require('mongodb')
const { MongoClient, ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose')
const Product = require('./models/product model')
const uri = 'mongodb+srv://admin:1234@cluster0.tstxgcn.mongodb.net/test?retryWrites=true&w=majority'


app.use(express.json)
app.use(express.urlencoded({extended : false}))

app.get('/',(req, res) => {
    res.send("Hello, Node API")
})

//Fetch all Products
app.get('/products', async(req, res) =>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//GEt Product By Id
app.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//Update Product
app.put('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product)
        {
            return res.status(404).json({message : `Cannot find any product with id ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//Delete Product
app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params
        const Product = await Product.findByIdAndDelete(id)

        if(!Product)
        {
            return res.status(404).json({message : `Cannot find any product with ID ${id}`})
        }
        res.status(200).json(console.log("Product Deleted Successfully"))

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})

//Send Product in database
app.post('/products', async(req, res) =>{
    try {
        const Product = await Product.create(req.body)
        res.status(200).json(Product)
    } 
    catch (error) {
        console.log(error.message)
        res.status(500).json({message : error.message})
    }
})

app.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})


// Create a MongoClient with a MongoClientOptions object to set the Stable API version


mongoose.connect(uri
).then(() => {
    console.log("Connected Successfully")
}).catch((err) =>{
    console.log(err)
})
