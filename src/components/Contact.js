import React from 'react'

const Contact = () => {
  return (
    <div className="classNamebig-container">
        <div className="d-flex flex-column mb-2">
          <div className="p-2" style={{backgroundImage:'url(https://designshack.net/wp-content/uploads/wood-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height:'40vh', color:'white', textAlign:'center'}}>
            <h1 style={{marginTop:'100px'}}>Contact Us</h1>
          </div>
          <div className="p-2">
            <div style={{textAlign:'center', fontWeight:'bolder', marginTop:'20px'}}>
              <strong><h2>Let's Start a Conversation</h2></strong>
            </div>
            <div style={{marginLeft:'20px', marginRight: '20px', maxWidth:'500px'}}>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label"><strong>Username</strong></label>
                  <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Problem</strong></label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>   
          </div>
        </div>
      </div>
  )
}

export default Contact
