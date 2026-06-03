import { asset } from '../utils/asset'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        {/* Blob image */}
        <div className="about__img-wrap">
          <img
            src={asset('/assets/IMG_0968.JPG')}
            alt="Nail technician at work in the salon"
            className="about__blob"
          />
          <img
            src={asset('/assets/IMG_1265.JPG')}
            alt="Fiery Nailbar salon"
            className="about__img-small"
          />
        </div>

        {/* Text */}
        <div className="about__text">
          <p className="about__eyebrow">Our Story</p>
          <h2>
            We&apos;re{' '}
            <em className="text-pink" style={{ fontStyle:'italic' }}>passionate</em>{' '}
            about nails
            <br />
            and celebrating the{' '}
            <em className="text-amber" style={{ fontStyle:'italic' }}>vibrant details</em>
          </h2>
          <p>
            Fiery Nailbar was born from a love of bold self-expression and
            impeccable craft. Since 2019, we&apos;ve been Johannesburg&apos;s go-to
            destination for anyone who refuses to settle for ordinary.
          </p>
          <p>
            Every technician trains continuously so your nails always reflect the
            latest trends — applied with the precision of a seasoned artist.
            We use only sterile single-use tools.
          </p>
          <a href="#booking" className="btn btn-accent">More About Us</a>
        </div>
      </div>
    </section>
  )
}
