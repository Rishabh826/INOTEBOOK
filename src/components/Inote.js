import React, { useState, useEffect, useRef } from 'react';
import { FaCarSide, FaEllipsisH, FaAws, FaReact, FaPython, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { PiFileSqlBold } from 'react-icons/pi';
import { IoLogoHtml5 } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
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
    backgroundImage: 'url(https://i.pinimg.com/originals/20/f8/eb/20f8eb85e86b370933d5e5180d632a74.gif)',
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
        <div className="container p-2" style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/cool-white-background-ingbh7qw7if21dkn.jpg)' }}>
          <div className="d-flex justify-content-center" style={{ textShadow: '4px 3px 3px black' }}>
            <h1><strong><span style={{ color: 'blue' }}>Unlock</span> Your Career</strong></h1>
          </div>
          <marquee className="d-flex justify-content-center" style={{ color: 'rgb(117, 109, 111)', marginBottom: '20px', animation: 'wave 2s infinite' }}>
            <FaCarSide /> <FaEllipsisH /> Explore opportunities from across the globe to learn, showcase skills, gain CV points & get hired by your dream company.
          </marquee>
          <div className="row justify-content-around mt-4">
            <div className="col-md-4">
              <Link className="link to Learn" to="/Learn">
                <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
                  <img src="https://i.pinimg.com/originals/61/87/e9/6187e9226969b30607c22591376850b7.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Learn</h5>
                    <hr style={{ backgroundColor: 'blue', height: '2px', margin: '8px 0' }} />
                    <p className="card-text"><strong>Expand</strong>
                      <span style={{ fontSize: '3rem', marginLeft: '4rem' }}><SiMongodb /></span><br />Knowledge Base</p>
                    <span style={{ fontSize: '3rem' }}><FaAws /></span>
                    <span style={{ fontSize: '3rem', marginLeft: '8px' }}><FaReact /></span>
                    <span style={{ fontSize: '3rem', marginLeft: '8px' }}><PiFileSqlBold /></span>
                    <span style={{ fontSize: '3rem', marginLeft: '8px' }}><FaPython /></span>
                    <span style={{ fontSize: '3rem', marginLeft: '8px' }}><IoLogoHtml5 /></span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="link to Jobs" to="/Jobs">
                <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
                  <img src="https://cdn.siasat.com/wp-content/uploads/2021/10/photo_2021-10-27_20-29-34.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Jobs</h5>
                    <p className="card-text"><strong>Explore</strong><br />Diverse career</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link className="link to Practice" to="/Practice">
                <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
                  <img src="https://c0.wallpaperflare.com/preview/498/976/47/success-stairs-board-drawing.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Practice</h5>
                    <p className="card-text"><strong>Refine</strong><br />Skill Daily</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row justify-content-around mt-4">
            <div className="col-md-6">
              <Link className="link to Mentorship" to="/Mentorship">
                <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
                  <img src="https://c0.wallpaperflare.com/preview/805/197/218/hikers-mentor-help-climbing.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Mentorship</h5>
                    <p className="card-text"><strong>Guidance</strong><br />From Top Mentor</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6">
              <Link className="link to Compete" to="/Compete">
                <div className="card text-bg-dark h-90" style={{ cursor: 'pointer', boxShadow: '5px 5px 5px black' }}>
                  <img src="https://c1.wallpaperflare.com/preview/612/780/946/shaking-hands-handshake-teamwork-staff.jpg" className="card-img" alt="..." />
                  <div className="card-img-overlay">
                    <h5 className="card-title">Compete</h5>
                    <p className="card-text"><strong>Battle</strong><br />For Excellence</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
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
