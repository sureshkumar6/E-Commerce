import express from "express";
import './db/config.js'
import cors from "cors"
import usersModel from "./db/user.js";
import productModel from "./db/product.js";

const JwtKey = 'e-com'

const app = express()
app.use(express.json())
app.use(cors())
app.post('/register', async (req, resp) => {
    let user = new usersModel(req.body)
    let result = await user.save()
    resp.send(result)
    // resp.send(req.body)
})

app.post('/login', async (req, resp) => {
    // let user = await usersModel.findOne(req.body).select("-password")
    if (req.body.email && req.body.password) {
        let user = await usersModel.findOne(req.body).select("-password")
        let userDetails = { user }
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "user not found" })
        }
    } else {
        resp.send({ result: "user not found" })
    }

})

app.post('/add-product', async (req, resp) => {
    let product = await new productModel(req.body)
    let result = await product.save()
    resp.send(result)
})

app.get('/list', async (req, resp) => {
    let product = await productModel.find()
    if (product.length > 0) {
        resp.send(product)
    } else {
        resp.send("No Products")
    }

})

app.delete('/delete/:id', async (req, resp) => {
    let product = await productModel.deleteOne({ _id: req.params.id })
    resp.send(product)
})

app.get('/product/:id', async (req, resp) => {
    let product = await productModel.findOne({ _id: req.params.id })
    if (product) {
        resp.send(product)
    } else {
        resp.send("No Record")
    }
})

app.put('/product/:id', async (req, resp) => {
    let product = await productModel.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    if (product.modifiedCount) {
        resp.send(product)
    } else {
        resp.send("Nothing Changed")
    }
})

app.get('/search/:key', async (req, resp) => {
    let product = await productModel.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "company": { $regex: req.params.key } }
            ]
        }
    )
    resp.send(product)
})

app.listen(6060)