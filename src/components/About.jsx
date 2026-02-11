import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo(contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1, scale: 1, rotate: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo(statsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: '3.28', label: 'CGPA' },
    { number: '1+', label: 'Projects' },
    { number: '5+', label: 'Technologies' },
    { number: '2026', label: 'Expected Grad' },
  ]

  return (
    <section id="about" ref={sectionRef} className="about section-padding">
      <div className="container">
        <h2 ref={titleRef} className="section-heading">
          <span className="heading-number">01.</span> About Me
        </h2>

        <div className="about-grid">
          <div ref={contentRef} className="about-content">
            <p>
              <span className="accent-text">Hello</span> I'm MD Abu Sayed Shuvo, an 
              ICT(Software Engineering) student at <span className="highlight">Asia Pacific University</span> in 
              Kuala Lumpur, Malaysia.
            </p>
            <p>
              Originally from Bangladesh, I'm currently pursuing my Diploma in ICT specializing in Software Engineering. 
              I have an interest in web development and also mobile app development — like the 
              food-sharing platform which was built in the RWDD module that helps reduce waste in the University.
            </p>
            <p>
              I know <span className="highlight">JavaScript, HTML/CSS, PHP(basic academic exposure), Java(basic academic exposure), and Python(basic academic exposure)</span>, 
              and currently learning <span className="highlight">React.js</span>. 
              I am interested in coding and IT related works.
            </p>
            <p>
              Alhamdulillah, Iam a member of the <span className="highlight">GitHub Student Developer Pack</span>, which has the valuable resources to enhance skills and projects.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <span className="about-info-label">Name</span>
                <span className="about-info-value">MD Abu Sayed Shuvo</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Nationality</span>
                <span className="about-info-value">Bangladesh</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Location</span>
                <span className="about-info-value">Kuala Lumpur, Malaysia</span>
              </div>
              <div className="about-info-item">
                <span className="about-info-label">Languages</span>
                <span className="about-info-value">Bengali, English, Malay</span>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span className="image-initials">Sayed</span>
                <span className="image-label">Image</span>
              </div>
              <div className="image-border"></div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="about-stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
