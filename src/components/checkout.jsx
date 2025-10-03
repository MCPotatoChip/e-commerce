export const Checkout = ({name,price,image,id,onRemove}) => {
    return(
        <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                    <img height={80} width={80} className="rounded" src={image} />
                    <div>
                        <h5>{name}</h5>
                        <p>{price}</p>
                    </div>
                
                </div>
                <button onClick={()=> onRemove(id)} className="btn-danger btn" style={{width:"fit-content", height:"fit-content"}}>Remove</button>
            </div>
        </div>
    )
}