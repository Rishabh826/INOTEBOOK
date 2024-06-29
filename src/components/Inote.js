import React, { useState, useEffect, useRef } from 'react';
import { FaCarSide, FaEllipsisH, FaAws, FaReact, FaPython, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import '../Inote.css';

const Inote = () => {
  const [text, setText] = useState('');
  const [isSecondWord, setIsSecondWord] = useState(false);
  const words = useRef([
    'Securely Upload and Store Your Notes!',
    'Your Notes, Safely Stored and Easily Accessible!',
  ]);
  const index = useRef(words.current[0].length);
  const wordIndex = useRef(0);
  const delta = 250; // Delay between each character

  useEffect(() => {
    const interval = setInterval(updateText, delta);
    return () => clearInterval(interval);
  }, [isSecondWord]);

  const updateText = () => {
    const word = words.current[wordIndex.current];
    let newText = '';

    if (!isSecondWord) {
      if (index.current > 0) {
        newText = word.slice(0, index.current - 1);
        index.current--;
      } else {
        setIsSecondWord(true);
        wordIndex.current = 1;
        index.current = 0;
      }
    } else {
      if (index.current < word.length) {
        newText = word.slice(0, index.current + 1);
        index.current++;
      } else {
        setIsSecondWord(false);
        wordIndex.current = 0;
        index.current = words.current[0].length;
      }
    }

    setText(newText);
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center mb-3 ">
        <div className="p-2"  style={{
    backgroundImage: 'url(https://s.yimg.com/ny/api/res/1.2/4R61dJVHDRxYU7qeL4lZSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM0OQ--/https://media.zenfs.com/en/accuweather_297/d53576fda71ac72eaf53b72a2e3451b0)',
    height: '60vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
            <strong style={{ color: 'white', fontSize: 'xxx-large', marginBottom: '1rem' }}>{text}</strong>
            <span style={{ color: 'white', marginBottom: '1rem' }}>
              <strong>Your data is protected with top-notch security measures.</strong>
            </span>
            <marquee scrollamount="10" direction="right" behavior="scroll" style={{ color: 'white', marginBottom: '1rem' }}>
              <strong>Enjoy peace of mind with advanced security. <FaEllipsisH /> <FaCarSide /> </strong>
            </marquee>
          </div>
        </div>
        <div className="d-flex flex-column ">
          <video src="video/youtube.mp4" controls style={{ width: '100%', height: 'auto', marginTop: '2rem' }} className="rounded"></video>
          <Link to="https://youtu.be/XEvuIC0Hhoc?si=aeaMuFP_utg-KRPk" className="btn btn-primary" style={{ marginTop: '2rem' }}>Click TO Play</Link>
          </div>
          <div className="d-flex justify-content-center">
          <div className="work" style={{ marginTop: '4rem' }}>
            <h1>How it works?</h1>
            <div class="d-flex justify-content-around" style={{ marginTop: '2rem' }}>

               
            <div class="card" style={{width: '18rem'}}>
            <div class="d-flex justify-content-center">
            <a class="navbar-brand" href="#">
      <img src="https://cdn.dribbble.com/users/4625326/screenshots/19602645/media/a38d52a0a465a2265aee186316cfa590.gif" alt="" width="80" height="64" class="d-inline-block align-text-top"/>
      
    </a>
            </div>
         
  <div class="card-body">
    <h5 class="card-title">UPLOAD YOUR STUDY NOTES</h5>
    <p class="card-text">Sign up for free and upload your documents, study notes and guides on Docmerit.
</p>
   
  </div>
</div>


<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
            <div class="d-flex justify-content-center">
            <a class="navbar-brand" href="#">
      <img src="https://media.tenor.com/rxVBUIgNvD0AAAAM/green-stock-market-remedium.gif" alt="" width="80" height="64" class="d-inline-block align-text-top"/>
      
    </a>
            </div>
         
  <div class="card-body">
    <h5 class="card-title">SET YOUR PRICE</h5>
    <p class="card-text">Set the selling price yourself and promote your documents, so that it reaches to many students.
</p>
   
  </div>
</div>


<div class="card" style={{width: '18rem',marginLeft:'2rem'}}>
            <div class="d-flex justify-content-center">
            <a class="navbar-brand" href="#">
      <img src="https://cdn.pixabay.com/animation/2022/11/15/11/35/11-35-07-140_512.gif" alt="" width="80" height="90" class="d-inline-block align-text-top"/>
      
    </a>
            </div>
         
  <div class="card-body">
    <h5 class="card-title">
    HAVE MULTIPLE SALES</h5>
    <p class="card-text">Student purchases your document, your earned money gets directly credited to your account.
</p>
   
  </div>
</div>
<hr />
                       </div>
          </div>
          
          </div>
          <div class="d-flex justify-content-between">

<div className="earnimage"><img src="https://ugokawaii.com/wp-content/uploads/2022/12/notebook.gif" alt="" /></div>

      </div>
          
      </div>
      
      
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>We are committed to providing secure and accessible note storage solutions.</p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/Learn">Learn</Link></li>
                <li><Link to="/Jobs">Jobs</Link></li>
                <li><Link to="/Practice">Practice</Link></li>
                <li><Link to="/Mentorship">Mentorship</Link></li>
                <li><Link to="/Compete">Compete</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item"><a href="https://facebook.com"><FaFacebook /></a></li>
                <li className="list-inline-item"><a href="https://twitter.com"><FaTwitter /></a></li>
                <li className="list-inline-item"><a href="https://instagram.com"><FaInstagram /></a></li>
                <li className="list-inline-item"><a href="https://linkedin.com"><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <p>&copy; 2024 Inote. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inote;
