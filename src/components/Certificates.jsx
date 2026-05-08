import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiAward, FiExternalLink, FiFileText, FiX } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const Certificates = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      title: 'JavaScript in Detail: From Beginner to Advanced',
      issuer: 'Educative',
      issued: 'May 5, 2026',
      credentialId: 'QNHLSDOP23',
      verifyUrl: 'https://www.educative.io/verify-certificate/QNHLSDOP23',
      fileUrl: '/QNHLSDOP23.pdf',
      previewUrl: '/QNHLSDOP23.png',
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
        { opacity: 0, y: 60, rotateX: 6 },
        {
          opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedCert])

  return (
    <>
      <section id="certificates" ref={sectionRef} className="certificates section-padding">
        <div className="container">
          <h2 ref={titleRef} className="section-heading">
            <span className="heading-number">05.</span> Certifications
          </h2>

          <div ref={cardsRef} className="certificates-grid">
            {certificates.map((cert, i) => (
              <article key={i} className="certificate-card">
                <div className="certificate-body">
                  <div className="certificate-top">
                    <div className="certificate-icon">
                      <FiAward />
                    </div>
                    <div>
                      <h3 className="certificate-title">{cert.title}</h3>
                      <p className="certificate-issuer">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="certificate-meta">
                    <span className="certificate-pill">Issued {cert.issued}</span>
                    <span className="certificate-pill">Credential ID: {cert.credentialId}</span>
                  </div>
                  <div className="certificate-actions">
                    {cert.verifyUrl && (
                      <a className="certificate-action primary" href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                        Verify
                      </a>
                    )}
                    {cert.fileUrl && (
                      <a className="certificate-action" href={cert.fileUrl} target="_blank" rel="noopener noreferrer">
                        <FiFileText />
                        View PDF
                      </a>
                    )}
                  </div>
                </div>
                {cert.previewUrl && (
                  <button
                    className="certificate-preview"
                    onClick={() => setSelectedCert(cert)}
                    type="button"
                  >
                    <img src={cert.previewUrl} alt={`${cert.title} certificate preview`} loading="lazy" />
                    <span className="certificate-preview-label">Click</span>
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <div className="certificate-modal-overlay"></div>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="certificate-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              <FiX />
            </button>
            <img src={selectedCert.previewUrl} alt={selectedCert.title} />
            <div className="certificate-modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates
