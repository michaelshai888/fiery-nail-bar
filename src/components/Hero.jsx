import { useEffect, useRef } from 'react'
import { asset } from '../utils/asset'
import './Hero.css'

const HERO_PHOTOS = [
  asset('/assets/portfolio/Keiren/FullSizeRender.jpeg'),
  asset('/assets/portfolio/Keiren/FullSizeRender%20(1).jpeg'),
  asset('/assets/portfolio/Keiren/FullSizeRender%20(2).jpeg'),
  asset('/assets/portfolio/Keiren/FullSizeRender%202.jpeg'),
  asset('/assets/portfolio/Keiren/IMG_1794.jpeg'),
]

export default function Hero() {
  const trackRef = useRef(null)
  const animRef = useRef(null)
  const posRef = useRef(0)
  const lastTimeRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = window.innerWidth <= 600 ? 28 : 16 // px/s

    const step = (time) => {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current
        posRef.current += (speed * delta) / 1000
        const halfWidth = track.scrollWidth / 2
        if (halfWidth > 0 && posRef.current >= halfWidth) {
          posRef.current -= halfWidth
        }
        track.style.transform = `translateX(-${posRef.current}px) translateZ(0)`
      }
      lastTimeRef.current = time
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)

    const handleVisibility = () => {
      if (document.hidden) lastTimeRef.current = null
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      cancelAnimationFrame(animRef.current)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__scroll-bg" aria-hidden="true">
        <div className="hero__scroll-track" ref={trackRef}>
          {[...HERO_PHOTOS, ...HERO_PHOTOS].map((src, i) => (
            <div key={i} className="hero__scroll-item">
              <img src={src} alt="" className="hero__scroll-img" />
            </div>
          ))}
        </div>
      </div>
      <div className="hero__overlay" />

      {/* Slide navigation arrows (decorative) */}
      <button className="hero__arrow hero__arrow--prev" aria-label="Previous">&#8249;</button>
      <button className="hero__arrow hero__arrow--next" aria-label="Next">&#8250;</button>

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">Premium Nail Studio · Johannesburg</p>
        <h1 className="hero__title">
          Nails That Tell<br />
          <em>Your Story</em>
        </h1>
        <p className="hero__sub">A treatment for every occasion</p>
        <a href="#booking" className="btn btn-accent hero__cta">Book an Appointment</a>
      </div>
    </section>
  )
}
