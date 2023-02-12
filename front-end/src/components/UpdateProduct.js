import { set } from "mongoose";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setProductName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [category, setCotegory] = React.useState("")
    const [company, setCompany] = React.useState("")
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProductDetails()
    }, [])

    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:6060/product/${params.id}`)
        result = await result.json()
        setProductName(result.name)
        setPrice(result.price)
        setCotegory(result.category)
        setCompany(result.company)
    }

    const handleUpdate = async () => {
        let result = await fetch(`http://localhost:6060/product/${params.id}`, {
            method: "put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        if (result.modifiedCount) {
            navigate("/")
            alert("Data Updated")
        }

    }
    return (
        <div className="login center-content">
            <h1>Update Product</h1>
            <input className="inputBox" type="text" placeholder="Enter Product Name"
                onChange={(e) => setProductName(e.target.value)} value={name} />

            <input className="inputBox" type="text" placeholder="Enter Product Price"
                onChange={(e) => setPrice(e.target.value)} value={price} />

            <input className="inputBox" type="text" placeholder="Enter Product Category"
                onChange={(e) => setCotegory(e.target.value)} value={category} />

            <input className="inputBox" type="text" placeholder="Enter Product Company"
                onChange={(e) => setCompany(e.target.value)} value={company} />

            <button onClick={handleUpdate} className="signUpBtn btn-style">Update</button>
        </div>
    )
}

export default UpdateProduct;
