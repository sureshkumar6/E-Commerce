import React from "react";


const AddProduct = () => {
    const [name, setProductName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [category, setCotegory] = React.useState("")
    const [company, setCompany] = React.useState("")
    const [error, setError] = React.useState(false)

    const userId = JSON.parse(localStorage.getItem("user"))._id

    const handleProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true)
            return false
        }
        // console.log(productName, price, category, Company)
        // console.log(userId)
        let result = await fetch('http://localhost:6060/add-product', {
            method: "post",
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        // console.log(result)
        result = await result.json();
        // console.log(result)
    }

    return (
        <div className="login center-content">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" placeholder="Enter Product Name"
                onChange={(e) => setProductName(e.target.value)} value={name} />
            {error && !name && <span className="invalid-input">Enter Valid Name</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Price"
                onChange={(e) => setPrice(e.target.value)} value={price} />
            {error && !price && <span className="invalid-input">Enter Valid Name</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Category"
                onChange={(e) => setCotegory(e.target.value)} value={category} />
            {error && !category && <span className="invalid-input">Enter Valid Name</span>}

            <input className="inputBox" type="text" placeholder="Enter Product Company"
                onChange={(e) => setCompany(e.target.value)} value={company} />
            {error && !company && <span className="invalid-input">Enter Valid Name</span>}

            <button onClick={handleProduct} className="signUpBtn" type="button">Add Product</button>
        </div>
    )
}

export default AddProduct;