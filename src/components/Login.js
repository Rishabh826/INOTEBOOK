import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Login = () => {
    const[credentials,setcredentials] = useState({email:"",password:""});
    const navigate = useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");

        }
        else{
            alert("Invalid credentials");
        }
    
    }
    const onchange=(e)=>{
     setcredentials({...credentials,[e.target.name]: e.target.value});
    }
  return (
    <div className='bg-dark' style={{ border: '2px solid white', backgroundImage: 'url(https://news.microsoft.com/wp-content/uploads/prod/sites/133/2019/02/Batch-2_4-960x560.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' ,marginTop:'2rem'}}>
        <div className="p-3 mb-2 text-dark" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="login-container" style={{ borderRadius: '20px', width: '90%', maxWidth: '420px', borderWidth: '2px', borderColor: 'white', borderStyle: 'solid', backdropFilter: 'blur(10px)',paddingTop:'40px' }}>
            <div className="card bg-transparent card-blur" style={{ padding: '20px' }}>
              <div className="login-title text-center font-weight-bold" style={{ color: 'black', backgroundColor: 'blur', marginTop: '20px' }}><h3>Login</h3></div>
              
              <form  onSubmit={handlesubmit}>
                <div className="form-group mx-3" >
                  <input type="text" className="form-control login-input" style={{ backgroundColor: 'transparent',color:'white', borderTop: '1px', borderRight: '1px', borderLeft: '1px' }}      placeholder="Username or e-mail" name='email' value={Credential.email} onChange={onchange} />
                </div>
                <div className="form-group mx-3 my-3">
                  <input type="password" style={{ backgroundColor: 'transparent', borderTop: '1px', borderRight: '1px', borderLeft: '1px' }} className="form-control login-input" placeholder="Password"   name='password' value={Credential.password} onchange={onchange}/>
                  <div className="form-check d-flex align-items-center">
                    <input type="checkbox" className="form-check-input" style={{ marginTop: '20px' }} />
                    <label htmlFor="/" className="form-check-label" style={{ color: 'black',marginLeft:'10px',marginTop:'15px' }}>Remember Me</label>
                  </div>
                  <div>
                  <Link className="forgot-link" to="/">
                    <h7 style={{color:'blue'}}>Forgot Password ?</h7>
              </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{ width: '90%', color: 'black', backgroundColor: 'white', borderRadius: '100px' }}><strong>Continue</strong></button>
                </form>
                <hr />
                <p style={{ color: 'black', marginLeft: '15px' }}>By Continue, you agree to jaggery world's <strong>Terms and  conditions</strong></p>
                <div className="d-flex justify-content-center" style={{ color: 'black' }}>
                  <p>New to C-Notebook?</p>
                </div>
                <Link className="d-flex justify-content-center" to="/Signup">
                  <button type="submit" className="btn btn-primary login-button mx-3 my-2 " style={{ width: '100%', background: 'white', color: 'black', borderRadius: '100px' }}><strong>Create your new C-Notebook account</strong></button>
                </Link>
              
              <div className="d-flex justify-content-center" style={{ color: 'black' }}>
                <h7>OR Sign up using</h7>
              </div>
              <div className="d-flex justify-content-center" style={{ fontSize: '30px', wordSpacing: '30px' }}>
              <Link className="google-link" to="/Bsfillpersonfill">
              <FcGoogle style={{ marginRight: '30px', marginTop: '20px' }} />
              </Link>
              <Link className="facebook-link" to="/Bsfillpersonfill">
              <FaFacebookSquare style={{ marginRight: '30px', marginTop: '20px' ,color:'blue'}} />
              </Link>
              <Link className="twitter-link" to="/Bsfillpersonfill">
              <FaXTwitter style={{ marginTop: '20px' , color:'black'}} />
              </Link>
            
                
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
