// ContactUs.js
import React from 'react';
import './Contact.css'; // Import CSS file for styling
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import github from "../../assets/github.svg"
const Contact = () => {
  return (
    <div className="contact-container">
      <h1 id='contactHeading'>Let's Connect!</h1>
      <div className="social-media-cards">
        <a href="https://www.instagram.com/husain.jhalod/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
          <i className="fab fa-instagram"></i>
          <img src={instagram} />
        </a>
        <a href="https://twitter.com/husain_j53" target="_blank" rel="noopener noreferrer" className="social-card twitter">
          <i className="fab fa-twitter"></i>
         <img src={twitter} />
        </a>
        <a href="https://www.linkedin.com/in/husain-jhalodwala/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
          <i className="fab fa-linkedin-in"></i>
          <img src={linkedin} />
        </a>
        <a href="https://github.com/Husainj" target="_blank" rel="noopener noreferrer" className="social-card github">
          <i className="fab fa-github"></i>
          <img id='githubImg' src={github} />
        </a>
      </div>
      <div id='email-card-container'>

 
      <div className="email-card">
        <i className="fas fa-envelope"></i>
  
        <span> Email: jhalodwalahusain30@gmail.com</span>
   
      </div>
      </div>

      <h2 id='lastLine'>Developed by Husain Jhalodwala</h2>
    </div>
  );
};

export default Contact;
