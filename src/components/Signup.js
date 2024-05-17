import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/");
      props.showAlert("Account created", "success");
    } else {
      alert("Invalid credentials");
      props.showAlert("Already existed", "Danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className='bg-dark' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container-fluid" style={{ height: '100vh', backgroundColor: 'white' }}>
          <div className="row align-items-center" style={{ height: '100%' }}>
            <div className="col-md-6 p-0">
              <img src="https://previews.123rf.com/images/3dmask/3dmask2103/3dmask210300054/167136936-3d-cartoon-man-working-on-laptop-illustration-isolated-on-white-background.jpg" alt="Signup" className="img-fluid" style={{ height: '100vh', width: '100%' }} />
            </div>
            <div className="col-md-6">
              <div className="card rotate" style={{ backgroundColor: 'white', backdropFilter: 'blur(2px)', color: 'black', border: 'none' }}>
                <div className="login-title text-center font-weight-bold" style={{ marginTop: '20px', marginRight: '120px' }}><h3>Sign up</h3></div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mx-3">
                    <label><strong>Full name</strong></label>
                    <input type="text" className="form-control login-input" style={{ borderBottom: '1px solid black', width: '400px' }} placeholder="Name" required name="name" value={credentials.name} onChange={onChange} />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Username</strong></label>
                    <input type="text" className="form-control login-input" style={{ borderBottom: '1px solid black', width: '400px' }} placeholder="Username" required />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Phone Number</strong></label>
                    <input
                      type="tel"
                      className="form-control login-input"
                      style={{ borderBottom: '1px solid black', width: '400px' }}
                      placeholder="Enter phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      required
                    />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>E-mail address</strong></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ borderBottom: '1px solid black', width: '400px' }} placeholder="Enter email" name="email" value={credentials.email} onChange={onChange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Choose Password</strong></label>
                    <input type="password" className="form-control login-input" style={{ borderBottom: '1px solid black', width: '400px' }} placeholder="Password" required name="password" value={credentials.password} onChange={onChange} />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Re-enter password</strong></label>
                    <input type="password" className="form-control login-input" style={{ borderBottom: '1px solid black', width: '400px' }} placeholder="Same as password" required />
                  </div>
                  <button type="submit" className="btn btn-success login-button mx-3 my-2">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
