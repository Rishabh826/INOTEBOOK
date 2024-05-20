import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

  

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();
    const handlelogout=()=>{
        localStorage.removeItem('token')
        navigate("/Login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:'url(https://media.istockphoto.com/id/1783642891/photo/real-starfield-background.webp?b=1&s=170667a&w=0&k=20&c=sHO2hQ7yGH-7qWpHiXpV_ehdfXwLWx6lLgUct5dASA0=)'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">C-Notebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/Home">My Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token')?
                    <form className="d-flex"> 
                    <Link className="btn btn-light mx-1" to="/Login" role="button">Login</Link>
                    <Link className="btn btn-light mx-1" to="/Signup" role="button">Signup</Link>
                    </form>: <button className="btn btn-success"   onClick={handlelogout}>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar