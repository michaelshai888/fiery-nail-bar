import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true" />
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
