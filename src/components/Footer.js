import React, { Component } from "react";
import "./Footer_style.css";
import DST from "../assets/DST.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Part */}
          <div className="footer-left">
            <div className="footer-site-logo">
            <img id='logo_image'
              src={DST}
              alt="Your Company Logo"
            />
            </div>
            <div className="footer-nav">
                <a href="/" ></a>
                <a href="/Description"></a>
                <a href="/Join-Trip"></a>
                <a href="/Contact" ></a>
                <a href="/Singup"></a>
                <a href="/Login"></a>
            </div>
          </div>
          
          {/* Middle Part */}
          <div className="footer-middle">
            <div className="footer-contact">
              <p>Contact us for more information:</p>
              <div className="contact-icons">
                <i className="fas fa-phone"></i>
                <p>Tel: 29783341</p>
              </div>
              <div className="contact-icons">
                <i className="fas fa-envelope"></i>
                <p>Email: benhelal.adib@isimm.u-monastir.tn</p>
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="footer-right">
            <p>About Us:</p>
            <p>
            Djerba Student Trip:
            An idea to make transportation to or from Djerba easier, more comfortable, and less expensive.<br></br>
            Responsible for the project: Benhlel Adib and their team.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/adib.benhlel.1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://github.com/AdibBENHLEL" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/adib-ben-hlel-6553842a0/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom"><b>All rights reserved &copy; 2024 Created by Benhlel Adib</b></p>
      </div>
    );
  }
}

export default Footer;
