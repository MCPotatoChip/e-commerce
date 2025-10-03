import react from "react";  
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Data } from "../App";

export default function EditProfile ()  {
    const {fname, setfName, sname, setsName,email, setEmail, phone, setPhone} = useContext(Data);
    const [newfName, setfNewName] = useState(fname);
    const [newsName, setsNewName] = useState(sname);
    const [newEmail, setNewEmail] = useState(email);
    const [newPhone, setNewPhone] = useState(phone);

    const handleChange = (e) => {
        e.preventDefault();
        setfName(newfName ? newfName : fname);
        setsName(newsName ? newsName : sname);
        setEmail(newEmail ? newEmail : email);
        setPhone(newPhone ? newPhone : phone);

        alert("Profile Updated Successfully")
    }
    return(
        <div className="container card mt-3 p-3">
            <h2 className="text-center">Edit Profile</h2>
            <hr />
            <label>First Name</label>
            <input type="text" className="form-control" placeholder={fname} onChange={(e)=>setfNewName(e.target.value)} />
            <label>Second Name</label>
            <input type="text" className="form-control" placeholder={sname} onChange={(e)=>setsNewName(e.target.value)} />
            <label>Email</label>
            <input type="email" className="form-control" placeholder={email} onChange={(e)=>setNewEmail(e.target.value)} />
            <label>Number</label>
            <input type="number" className="form-control" placeholder={phone} onChange={(e)=>setNewPhone(e.target.value)}  />
            

            <div className="d-flex justify-content-between my-3">
            <Link to="/profile">
            <button className="btn btn-outline-danger">Cancel</button>
            </Link>
            <button className="btn btn-success" onClick={handleChange}>Save Changes </button>
            </div>





        </div>  
    )
}
