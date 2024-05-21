import React from 'react';


const About = () => {
  return (
    <div style={{backgroundImage:'url(https://wallpapers.com/images/hd/clouds-4k-at0qrb9h55he9z8l.jpg)',zIndex:'0.1'}}>
     
      <main style={styles.main}>
        <section style={styles.about}>
          <h1>About SecureNotes</h1>
          <p>Welcome to SecureNotes, your trusted platform for safely uploading and storing your notes. Founded by Rishabh Jangid in 2024, SecureNotes is dedicated to providing a secure and reliable environment for your most important documents.</p>
          
          <h2>Our Mission</h2>
          <p>Our mission is to ensure that your notes are always protected and easily accessible. We leverage top-notch security measures to safeguard your data, giving you peace of mind and the convenience of accessing your notes anytime, anywhere.</p>
          
          <h2>Our Story</h2>
          <p>SecureNotes was born out of a need for a secure, user-friendly platform to manage and store notes. Rishabh Jangid, our founder, recognized the importance of keeping personal and professional notes secure in an increasingly digital world. With a vision to create the safest and most accessible note storage solution, SecureNotes was launched in 2024.</p>
          
          <h2>Why Choose SecureNotes?</h2>
          <ul>
            <li><strong>Security:</strong> We use advanced encryption methods to ensure your data is always protected.</li>
            <li><strong>Accessibility:</strong> Access your notes from any device, at any time, without compromising security.</li>
            <li><strong>User-Friendly:</strong> Our platform is designed with simplicity in mind, making it easy for you to upload, organize, and retrieve your notes.</li>
          </ul>
          
          <h2>Meet Our Founder</h2>
          <p>Rishabh Jangid, a visionary entrepreneur, founded SecureNotes with a passion for technology and security. With a background in software development and cybersecurity, Rishabh has dedicated himself to creating a platform that prioritizes user data protection while offering unparalleled convenience.</p>
        </section>
      </main>
      
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p>&copy; 2024 SecureNotes. All rights reserved.</p>
          
        </div>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#007BFF',
    padding: '1rem',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  main: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  about: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  footer: {
    backgroundColor: 'black',
    padding: '1rem',
    color: 'white',
   
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerNavLink: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default About;
