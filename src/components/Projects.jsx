import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const projectsRef = useRef(null)

  const projects = [

    {
      title: 'Portfolio Website',
      subtitle: 'Personal Portfolio',
      description: 'Modern, interactive portfolio website built with React.js featuring GSAP animations, component-based architecture, and responsive design principles for an immersive user experience.',
      tech: ['React.js', 'GSAP', 'CSS3', 'Vite'],
      github: 'https://github.com/Shuvo-labb',
      live: 'https://sayedshuvo-portfolio.vercel.app/',
      featured: true,
      image: null,
    },
        {
      title: 'Share & Spare',
      subtitle: 'Food Sharing Platform',
      description: 'A full-stack web application connecting students and food distributors to reduce food waste. Features user authentication, waste logging system, real-time food availability dashboard, and responsive design for all devices.',
      tech: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Shuvo-labb/RWDD.git',
      live: null,
      featured: true,
      image: null,
    },
    
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )

      const items = projectsRef.current.children
      gsap.fromTo(items,
        { opacity: 0, y: 80 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: projectsRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="projects section-padding">
      <div className="container">
        <h2 ref={titleRef} className="section-heading">
          <span className="heading-number">03.</span> Projects
        </h2>

        <div ref={projectsRef} className="projects-list">
          {projects.map((project, i) => (
            <div key={i} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image-area">
                <div className="project-image-placeholder">
                  <FiFolder size={48} />
                  <span>{project.title}</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-overline">Featured Project</span>
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.subtitle}</h4>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech">
                  {project.tech.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub size={22} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
