import React from 'react';
const Signup = () => {
  return (
    <div>
        <div className='bg-dark' style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container-fluid" style={{ height: '100vh' ,backgroundColor:'white'}}>
          <div className="row align-items-center" style={{ height: '100%' }}>
          
            <div className="col-md-6 p-0">
              <img src="https://previews.123rf.com/images/3dmask/3dmask2103/3dmask210300054/167136936-3d-cartoon-man-working-on-laptop-illustration-isolated-on-white-background.jpg" alt="Signup" className="img-fluid" style={{ height: '100vh', width: '100%' }} />
            </div>
        
            <div className="col-md-6" >
              <div className="card rotate" style={{ backgroundColor: 'white', backdropFilter: 'blur(2px)', color: 'black', border: 'none' }}>
                <div className="login-title text-center font-weight-bold" style={{ marginTop: '20px',marginRight:'120px' }}><h3>Sign up</h3></div>
                <form>
                  <div className="form-group mx-3">
                    <label><strong>Full name</strong></label>
                    <input type="text" className="form-control login-input" style={{ borderBottom: '1px solid black', width:'400px' }} placeholder="Full Name" required />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Username</strong></label>
                    <input type="text" className="form-control login-input" style={{ borderBottom: '1px solid black',width:'400px' }} placeholder="Username" required />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Phone Number</strong></label>
                    <input
                      type="tel"
                      className="form-control login-input"
                      style={{ borderBottom: '1px solid black',width:'400px' }}
                      placeholder="Enter phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      required
                    />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>E-mail address</strong></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ borderBottom: '1px solid black',width:'400px' }} placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Choose Password</strong></label>
                    <input type="password" className="form-control login-input" style={{ borderBottom: '1px solid black',width:'400px' }} placeholder="Password" required />
                  </div>
                  <div className="form-group mx-3 my-1">
                    <label><strong>Re-enter password</strong></label>
                    <input type="password" className="form-control login-input" style={{ borderBottom: '1px solid black' ,width:'400px'}} placeholder="Same as password" required />
                  </div>
                  <button type="submit" className="btn btn-success login-button mx-3 my-2">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
