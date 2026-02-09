import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Loader = ({ setLoading }) => {
  const loaderRef = useRef(null)
  const textRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: () => setLoading(false)
        })
      }
    })

    tl.fromTo(textRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo(progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: 'power2.inOut' },
      '-=0.3'
    )

    return () => tl.kill()
  }, [])

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-content">
        <h2 ref={textRef} className="loader-text">SHUVO<span className="accent">.</span></h2>
        <div className="loader-bar">
          <div ref={progressRef} className="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
