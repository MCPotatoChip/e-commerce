import Product from '../assets/watch.jpeg' 
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Data } from '../App';
export default function Card(props) {
    const {list,setlist} = useContext(Data);

    const isAdded = list.includes(props.id);
    const handleAddToCart = () => {
        setlist((prevList)=>
        isAdded ? prevList.filter(item => item !== props.id) : [...prevList, props.id]
        );
    };
    return(
            <div className="card text-center p-3">
                <Link style={{textDecoration:"none", color:"black"}} to={`/products/${props.id}`}>

                    <div className="position-relativ">
                        <img src={props.image} alt="" className="card-img" style={{width:"200px", height:"200px"}} />
                        <span className="position-absolute top-0 badge bg-danger p-2 end-0">${props.price}</span> 
                    </div>
                    <p className="card-title text-truncate " style={{maxWidth:"220px"}}>{props.name}</p>
                </Link>
                <button onClick={handleAddToCart} className={isAdded ? "btn btn-outline-danger fw-bold":"btn btn-outline-primary fw-bold"}>{isAdded ? "Remove from Cart"  : "Add to Cart"}</button>
            </div>
    )
}
