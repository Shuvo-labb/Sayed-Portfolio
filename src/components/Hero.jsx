import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FiGithub, FiMail, FiMapPin, FiArrowDown, FiLinkedin } from 'react-icons/fi'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const socialRef = useRef(null)
  const scrollRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 })

    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(titleRef.current.children,
      { opacity: 0, y: 80, rotateX: -20 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.15, ease: 'power4.out' },
      '-=0.4'
    )
    .fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(ctaRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(socialRef.current.children,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      '-=0.2'
    )

    // Floating particles animation
    const particles = particlesRef.current.children
    Array.from(particles).forEach((particle, i) => {
      gsap.to(particle, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.3
      })
    })

    // Scroll indicator bounce
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    return () => tl.kill()
  }, [])

  return (
    <section id="hero" ref={heroRef} className="hero">
      <div ref={particlesRef} className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
          }}></div>
        ))}
      </div>

      <div className="hero-content">
        <p ref={subtitleRef} className="hero-greeting">
          <span className="accent">Hello</span> I'm
        </p>
        <div ref={titleRef} className="hero-title">
          <span>MD Abu Sayed</span>
          <span className="outline-text">Shuvo<span className="accent">.</span></span>
        </div>
        <p ref={descRef} className="hero-description">
          ICT(Specialism: Software Engineering) Student at Asia Pacific University, Interested in web development and also mobile app development. Looking forward to work where I can enhance my skills and contribute to the organization's growth. In Sha Allah
        </p>
        <div ref={ctaRef} className="hero-cta">
          <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }) }}>
            Projects
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}>
            Get In Touch
          </a>
        </div>
      </div>

      <div ref={socialRef} className="hero-social">
        <a href="https://github.com/Shuvo-labb" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/md-abu-sayed-shuvo-7452253aa/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
        <a href="mailto:TP083213@mail.apu.edu.my"><FiMail /></a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }) }}><FiMapPin /></a>
        <div className="social-line"></div>
      </div>

      <div ref={scrollRef} className="scroll-indicator">
        <span>Scroll Down</span>
        <FiArrowDown />
      </div>
    </section>
  )
}

export default Hero
