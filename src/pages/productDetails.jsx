import react, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductDetails  ()  {
    const [prodcut, setProduct] = react.useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`).then(res => {setProduct(res.data);})
        .catch(err => {console.log(err);})
    });

    return(
        <div className="text-center mt-3">
            <h3>{prodcut.name}</h3>
            <img src={prodcut.image} alt={`Product %{id}`} style={{width:"250px", height:"250px"}} />
            <p>{prodcut.description}</p>
            <p>{prodcut.price}</p>
            <Link className="btn btn-primary" to="/" >Go Back</Link>
        </div>  
    )
}
