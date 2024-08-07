import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();
   

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/Login");
        const mypromis= new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('success!')
            }, 1000);
        })
        mypromis.then(result=>{
            alert("Logout successfully")
        })
    };

    

    return (
        <>
         

            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundImage: 'url(https://media.istockphoto.com/id/1783642891/photo/real-starfield-background.webp?b=1&s=170667a&w=0&k=20&c=sHO2hQ7yGH-7qWpHiXpV_ehdfXwLWx6lLgUct5dASA0=)' }}>
                <div className="container-fluid">
                <img src="https://i.pinimg.com/originals/58/11/68/581168252081681aa1fd9fc35dc665b6.gif" alt="Logo" width="90" height="64" className="d-inline-block align-text-top"/>
                    <Link className="navbar-brand" to="/">C-Notebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Home" ? "active" : ""}`} aria-current="page" to="/Home">My Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/market">NotesMarket</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? (
                            <form className="d-flex">
                                <Link className="btn btn-light mx-1" to="/Login" role="button">Login</Link>
                                <Link className="btn btn-light mx-1" to="/Signup" role="button">Signup</Link>
                            </form>
                        ) : (
                            <div className="d-flex align-items-center">
                                <i className="fa-solid fa-user-secret mx-5"  style={{ color: 'white', fontSize: '2.5rem' }}></i>
                                <button className="btn btn-success" onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
