import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Data } from "../App";

export default function Navbar () {
    const {fname} = useContext(Data)
    return(
        <div className="bg-primary d-flex justify-content-between align-items-center p-3">
            <h3><Link to="/"class="text-decoration-none text-white">E-commerce</Link></h3>
            <div className="d-flex gap-2">
            <Link to="/" className="text-white text-decoration-none">Home</Link>
            <Link to="/about" className="text-white text-decoration-none">About</Link>
            <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
            
            <Link to="/profile" className="text-white text-decoration-none">
            <i className="bi bi-person-circle me-2"style={{ fontSize: "1rem" }}></i>
            {fname}</Link>
            <Link to="/cart" className="text-white text-decoration-none">Cart</Link>
            </div>

        </div>
    )
}