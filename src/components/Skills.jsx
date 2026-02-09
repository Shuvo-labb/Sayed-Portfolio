import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaJava, FaPython, FaPhp, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiFirebase, SiIntellijidea } from 'react-icons/si'
import { DiHtml5, DiCss3 } from 'react-icons/di'
import { VscCode } from 'react-icons/vsc'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript />, level: 75 },
        { name: 'Java', icon: <FaJava />, level: 60 },
        { name: 'Python', icon: <FaPython />, level: 55 },
        { name: 'PHP', icon: <FaPhp />, level: 65 },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <DiHtml5 />, level: 85 },
        { name: 'CSS3', icon: <DiCss3 />, level: 80 },
        { name: 'React.js', icon: <FaReact />, level: 40 },
        { name: 'Responsive Design', icon: <DiHtml5 />, level: 75 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, level: 65 },
        { name: 'Firebase', icon: <SiFirebase />, level: 40 },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', icon: <FaGitAlt />, level: 70 },
        { name: 'VS Code', icon: <VscCode />, level: 85 },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, level: 60 },
        { name: 'XAMPP', icon: <FaDatabase />, level: 70 },
      ]
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

      const cards = cardsRef.current.children
      gsap.fromTo(cards,
        { opacity: 0, y: 60, rotateY: -10 },
        {
          opacity: 1, y: 0, rotateY: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )

      // Animate skill bars after cards appear
      setTimeout(() => {
        document.querySelectorAll('.skill-progress-bar').forEach(bar => {
          const level = bar.dataset.level
          gsap.fromTo(bar,
            { scaleX: 0 },
            {
              scaleX: 1, duration: 1.2, ease: 'power3.out',
              scrollTrigger: { trigger: bar, start: 'top 90%' }
            }
          )
        })
      }, 500)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="skills section-padding">
      <div className="container">
        <h2 ref={titleRef} className="section-heading">
          <span className="heading-number">02.</span> Skills & Technologies
        </h2>

        <div ref={cardsRef} className="skills-grid">
          {skillCategories.map((category, i) => (
            <div key={i} className="skill-card">
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, j) => (
                  <div key={j} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div
                        className="skill-progress-bar"
                        data-level={skill.level}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
