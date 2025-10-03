import { Checkout } from "../components/checkout"
import { useContext } from "react"
import { Data } from "../App"
import { useEffect, useState } from "react"

export default function Cart() {
    const {list,setlist} = useContext(Data);
    const [products,setProducts] = useState([]);

    useEffect(() => {
        if(list.length > 0) {
            fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>
                {const filteredProducts = data.filter((product) => list.includes(product.id)); setProducts(filteredProducts);}
        )
        } else {
            setProducts([]);
        }
    },[list])
    
    const remove = (id) => {
        setlist((prevList) => prevList.filter((item) => item !== id));
    }

    let total = 0;
    products.forEach((item) => {
        total += item.price;
    });
    total = total.toFixed(2);

    const checkout = () => {
        setlist([]);
        alert("Order Placed Successfully");
    } 

    
    return(
        <div className="container mt-5">
            <h2 className="mb-4">Your Cart</h2>
            <div className="row">
                <div className="col-lg-8">
                    {products.map((product) => 
                    <Checkout id={product.id} name={product.title} price={product.price} image={product.image}
                    onRemove={remove}  /> )}

                </div>
                <div className="col-lg-4">
                        <div className="card p-3">
                            <h3>Order</h3>
                            <h5 className="mb-5">{total}</h5>
                            <button className="btn btn-primary mb-2" onClick={() => checkout()}>Checkout</button>
                            <button className="btn btn-outline-danger" onClick={() => setlist([])}>Clear Cart</button>
                        </div>
                </div>
            </div>
        </div> 
    )
}