import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FiFileText, FiGithub, FiLinkedin } from 'react-icons/fi'

const Navbar = () => {
  const navRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.5 }
    )

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => handleClick(e, '#hero')}>
          SHUVO<span className="accent">.</span>
        </a>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <div className="nav-links-group">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <a href="/cv.html" target="_blank" rel="noopener noreferrer" className="nav-cta nav-cta-primary">
              <FiFileText />
              My CV
            </a>
            <a href="https://github.com/Shuvo-labb" target="_blank" rel="noopener noreferrer" className="nav-cta nav-cta-ghost" aria-label="GitHub">
              <FiGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/md-abu-sayed-shuvo-753806407" target="_blank" rel="noopener noreferrer" className="nav-cta nav-cta-ghost" aria-label="LinkedIn">
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
