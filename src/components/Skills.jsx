import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaJava, FaPython, FaPhp, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiMysql, SiFirebase, SiSupabase, SiIntellijidea, SiVite, SiVercel } from 'react-icons/si'
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
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Java(basic academic exposure)', icon: <FaJava /> },
        { name: 'Python(basic academic exposure)', icon: <FaPython /> },
        { name: 'PHP(basic academic exposure)', icon: <FaPhp /> },
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <DiHtml5 /> },
        { name: 'CSS3', icon: <DiCss3 /> },
        { name: 'React.js(Learning)', icon: <FaReact /> },
        { name: 'Responsive Design', icon: <DiHtml5 /> },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Supabase', icon: <SiSupabase /> },
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git/GitHub', icon: <FaGitAlt /> },
        { name: 'VS Code', icon: <VscCode /> },
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
        { name: 'XAMPP', icon: <FaDatabase /> },
        { name: 'Vite', icon: <SiVite /> },
        { name: 'Vercel', icon: <SiVercel /> },
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
              <div className="skill-tags">
                {category.skills.map((skill, j) => (
                  <div key={j} className="skill-tag">
                    <span className="skill-tag-icon">{skill.icon}</span>
                    <span className="skill-tag-name">{skill.name}</span>
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
