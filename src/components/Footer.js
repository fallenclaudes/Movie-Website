// src/components/Footer.js
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Watch Me Now. All rights reserved.</p>
        <p>
          <a href="/about">About Us</a> | <a href="/contact">Contact</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
