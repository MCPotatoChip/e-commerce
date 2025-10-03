import react from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./card.jsx";


export default function Home  () {
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data));
    });
    useEffect(() => {
        if(inputValue === "") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase())));
        }
    }, [inputValue, products]);
    return(
        <div className="container p4 d-flex flex-column gap-4 align-items-center">
            <h3>Search for a product</h3>
            <input type="text" className="form-control w-50" placeholder="Search for products..." onChange={(e)=>setInputValue(e.target.value)} />
            <div className="products" style={productsStyle}>
                
                {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                
                    <Card name={product.title} image={product.image} price={product.price} id={product.id} />

                ))
                 : <h3>No products found</h3>}
            </div>
        </div>  
    );
}
const productsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 24%)",
    gridTemplateRows: "auto",
    gap: "3%",
}