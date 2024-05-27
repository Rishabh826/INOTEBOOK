import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();
    
    const handlelogout = () => {
        localStorage.removeItem('token');
        navigate("/Login");
    };

    const ref = useRef(null);

    const profilehandle = () => {
        ref.current.click();
    };

    return (
        <>
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Your profile information goes here...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            

            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundImage:'url(https://media.istockphoto.com/id/1783642891/photo/real-starfield-background.webp?b=1&s=170667a&w=0&k=20&c=sHO2hQ7yGH-7qWpHiXpV_ehdfXwLWx6lLgUct5dASA0=)'}}>
                <div className="container-fluid">
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
                                <i className="fa-solid fa-user-secret mx-5" onClick={profilehandle} style={{ color: 'white', fontSize: '2.5rem' }}></i>
                                <button className="btn btn-success" onClick={handlelogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
