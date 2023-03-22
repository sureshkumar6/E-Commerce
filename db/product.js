import mongoose from "mongoose";
const productScheme = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String
})

const productModel = mongoose.model('products', productScheme)
export default productModel