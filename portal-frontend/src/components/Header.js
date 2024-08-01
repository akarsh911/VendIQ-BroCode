import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container container'>
      
          <h1 style={{
            fontSize:"2.5rem"
          }}>
            VendIQ
          </h1>
        
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href=''>Dashboard</a>
          </li>
          <li>
            <a href='#'>Reports</a>
          </li>
          <li>
            <a href='#'>Call Logs</a>
          </li>
          <li>
            <a href='#'>Sales Data</a>
          </li>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Help/Support</a>
          </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Header;
