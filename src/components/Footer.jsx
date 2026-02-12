import React from 'react'
import { FiGithub, FiMail, FiHeart, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <a href="#hero" className="footer-logo">SHUVO<span className="accent">.</span></a>
            <p className="footer-text">Member of GitHub Student Developer Pack</p>
          </div>
          <div className="footer-center">
            <p className="footer-credit">
              Built by Github copilot, customized by <span className="accent">MD Abu Sayed Shuvo</span>
            </p>
            <p className="footer-copy">&copy; 2026 All Rights Reserved</p>
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/Shuvo-labb" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="https://www.linkedin.com/in/md-abu-sayed-shuvo-7452253aa/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
              <a href="mailto:TP083213@mail.apu.edu.my"><FiMail /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Shuvo<FiHeart className="heart-icon" /></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
