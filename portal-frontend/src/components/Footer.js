import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className='footer-distributed'>
        <div className='footer-left'>
          <h3>
            Vend<span>IQ</span>
          </h3>
          <p className='footer-links'>
            <a href='#' className='link-1'>
              Dashboard
            </a>
            <a href='#'>Reports</a>
            <a href='#'>Call Logs</a>
            <a href='#'>Sales Data</a>
            <a href='#'>Profile</a>
            <a href='#'>Help/Support</a>
          </p>
          <p className='footer-company-name'>VendIQ © 2024</p>
        </div>

        <div className='footer-center'>
          <div>
            <i className='fa fa-map-marker'></i>
            <p>
              <span>Team Brocode</span> TIET, Patiala
            </p>
          </div>
          <div>
            <i className='fa fa-phone'></i>
            <p>+91 7817842904</p>
          </div>
          <div>
            <i className='fa fa-envelope'></i>
            <p>
              <a href='mailto:support@company.com'>gurmankaur0603@gmail.com</a>
            </p>
          </div>
        </div>

        <div className='footer-right'>
          <p className='footer-company-about'>
            <span>About Us</span>
            Revotionising the way sales are made by assisting the Callers in
            real-time on the basis of user sentiments and response.
          </p>
          <div className='footer-icons'>
            <a href='#'>
              <i className='fa fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='#'>
              <i className='fa fa-linkedin'></i>
            </a>
            <a href='#'>
              <i className='fa fa-github'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
