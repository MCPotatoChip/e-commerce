export default function Profile ()  { 
    const {fname,sname,email,phone} = useContext(User)
    
    return <div className="container card mt-3">
        <div className="d-flex flex-column align-items-center p-3">
            <img width={100} height={100} src="" alt="" />
            <h2>{fname} {sname}</h2>
            <Link to="/editProfile"><button className="btn btn-primary">Edit Profile</button></Link>
        </div>

        <hr />
        <div className="d-flex justify-content-between p-3">
            <div>
                <h3>email</h3>
                <p>{email}</p>
            </div>
            <div>
                <h3>Phone</h3>
                <p>{phone}</p>
            </div>
        </div>

    </div>
    }