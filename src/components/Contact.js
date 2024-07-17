import React from 'react'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "27cf6541-667d-4a32-887c-8044f9ddedce");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    } else {
      console.log("Failed", res);
    }
  };

  return (
    <div className="classNamebig-container">
      <div className="d-flex flex-column mb-2">
        <div className="p-2" style={{ backgroundImage: 'url(https://designshack.net/wp-content/uploads/wood-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '40vh', color: 'white', textAlign: 'center' }}>
          <h1 style={{ marginTop: '100px' }}>Contact Us</h1>
        </div>
        <div className="p-2">
          <div style={{ textAlign: 'center', fontWeight: 'bolder', marginTop: '20px' }}>
            <strong><h2>Let's Start a Conversation</h2></strong>
          </div>
          <div style={{ marginLeft: '20px', marginRight: '20px', maxWidth: '500px' }}>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"><strong>Email address</strong></label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputName1" className="form-label"><strong>Username</strong></label>
                <input type="text" className="form-control" id="exampleInputName1" name="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Problem</strong></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Contact;
