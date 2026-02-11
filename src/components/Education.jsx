import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiBookOpen, FiAward } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      const items = timelineRef.current.children
      gsap.fromTo(items,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="education section-padding">
      <div className="container">
        <h2 ref={titleRef} className="section-heading">
          <span className="heading-number">04.</span> Education
        </h2>

        <div ref={timelineRef} className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <FiBookOpen />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Diploma in ICT (Software Engineering)</h3>
                  <h4 className="timeline-place">Asia Pacific University</h4>
                  <p className="timeline-location">Kuala Lumpur, Malaysia</p>
                </div>
                <span className="timeline-date">Aug 2024 - Nov 2026</span>
              </div>
              <div className="timeline-details">
                <div className="cgpa-badge">
                  <FiAward />
                  <span>CGPA: 3.28</span>
                </div>
                <div className="coursework">
                  <h5>Relevant Coursework:</h5>
                  <div className="coursework-tags">
                    <span>Responsive Web Design & Development</span>
                    <span>Programming with Python</span>
                    <span>Database Management</span>
                    <span>Low-Code Development</span>
                    <span>Object Oriented Programming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <FiBookOpen />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">Continuous Learning</h3>
                  <h4 className="timeline-place">Self-Paced Online Learning</h4>
                  <p className="timeline-location">Educative.io & Other Platforms</p>
                </div>
                <span className="timeline-date">Ongoing</span>
              </div>
              <div className="timeline-details">
                <div className="coursework">
                  <h5>Currently Learning:</h5>
                  <div className="coursework-tags">
                    <span>Learn React 19: The Complete Guide to Modern Web Apps</span>
                    <span>JavaScript in Detail: From Beginner to Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
