import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }

    return (
        <div>{auth ?
            <ul className="nav-ul">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/add">Add Product</Link></li>
                <li> <Link to="/update">Update Product</Link></li>
                <li> <Link to="/profile">Profile</Link></li>

                <ul className="nav-ul nav-user">
                    <li><div>{JSON.parse(auth).name}</div><Link onClick={logout} to="/signup"> Logout</Link></li>
                </ul>
            </ul> :
            <ul className="nav-ul nav-user">
                <li><Link to="/signup">Sign Up</Link></li>
                <li> <Link to="/Login">Login</Link></li>
            </ul>
        }
        </div>
    )
}

export default Nav