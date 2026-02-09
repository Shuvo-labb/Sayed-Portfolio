import React from 'react'
import { FiGithub, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <a href="#hero" className="footer-logo">SHUVO<span className="accent">.</span></a>
            <p className="footer-text">Building the future, one line of code at a time.</p>
          </div>
          <div className="footer-center">
            <p className="footer-credit">
              Designed & Built by <span className="accent">MD Abu Sayed Shuvo</span>
            </p>
            <p className="footer-copy">&copy; 2026 All Rights Reserved</p>
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/Shuvo-labb" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="mailto:TP083213@mail.apu.edu.my"><FiMail /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made with <FiHeart className="heart-icon" /> and lots of coffee</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
