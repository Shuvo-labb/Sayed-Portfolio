import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiMapPin, FiGithub, FiSend } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const formRef = useRef(null)

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, connect to a backend API
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="contact section-padding">
      <div className="container">
        <h2 ref={titleRef} className="section-heading">
          <span className="heading-number">05.</span> Get In Touch
        </h2>

        <div className="contact-grid">
          <div ref={contentRef} className="contact-content">
            <h3 className="contact-subtitle">Let's work together</h3>
            <p className="contact-text">
              I'm currently looking for internship opportunities and collaborations. 
              Whether you have a question, a project idea, or just want to say hello, 
              feel free to reach out. In sha Allah, I'll try my best to get back to you!
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <FiMail className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Email</span>
                  <a href="mailto:TP083213@mail.apu.edu.my" className="contact-info-value">
                    TP083213@mail.apu.edu.my
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <FiMapPin className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">Sri Petaling, Kuala Lumpur 57000, Malaysia</span>
                </div>
              </div>
              <div className="contact-info-item">
                <FiGithub className="contact-info-icon" />
                <div>
                  <span className="contact-info-label">GitHub</span>
                  <a href="https://github.com/Shuvo-labb" target="_blank" rel="noopener noreferrer" className="contact-info-value">
                    github.com/Shuvo-labb
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <FiSend /> Send Message
            </button>
            {submitted && <p className="form-success">Message sent successfully! JazakAllah Khair!</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
