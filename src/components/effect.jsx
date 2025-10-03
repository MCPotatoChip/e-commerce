import { useEffect, useState } from "react"

export const Effect =() =>{
    const [isHide, setIsHide] = useState(true)

    return(
    <div>
        <button onClick={() => setIsHide(!isHide)}>{isHide ? "Show" : "Hide"}</button>
        <br />
        {!isHide && <Image />} 
    </div>
    );
};
const Image = () =>{
    useEffect(()=>{
        console.log("Image is mounting")
        return(()=>{
            console.log("Image is unmounting")
        })
    })
    return <img src="https://th.bing.com/th/id/OIP.DeyRHLbDI_Jdi9nNlqaPFQHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3" alt="" />
}