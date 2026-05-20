import { asset } from '../utils/asset'
import './Hero.css'

const HERO_PHOTOS = [
  asset('/assets/portfolio/FullSizeRender.jpeg'),
  asset('/assets/portfolio/IMG_1794.jpeg'),
  asset('/assets/portfolio/IMG_2166.jpeg'),
  asset('/assets/portfolio/IMG_2812.jpeg'),
  asset('/assets/portfolio/IMG_3020.jpeg'),
  asset('/assets/portfolio/IMG_3610.jpeg'),
  asset('/assets/portfolio/IMG_5336.jpeg'),
  asset('/assets/portfolio/IMG_5820.jpeg'),
  asset('/assets/portfolio/IMG_6615.jpeg'),
  asset('/assets/portfolio/IMG_7338.jpeg'),
  asset('/assets/portfolio/IMG_7718.jpeg'),
  asset('/assets/portfolio/IMG_8242.jpeg'),
]

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__scroll-bg" aria-hidden="true">
        <div className="hero__scroll-track">
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
