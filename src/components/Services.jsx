import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    title: 'Gel Overlay',
    desc: 'A simple gel paint on your natural nails.',
    price: 'R455',
    badge: null,
  },
  {
    title: 'Rubber Base Gel',
    desc: 'A hardier gel applied to your natural nails.',
    price: 'R495',
    badge: null,
  },
  {
    title: 'Builder Gel Overlay',
    desc: 'A very sturdy gel applied to your natural nails. Good for weaker nails.',
    price: 'R575',
    badge: null,
  },
  {
    title: 'Builder Gel Sculpted Tips — Short',
    desc: 'A very sturdy gel extension.',
    price: 'R595',
    badge: 'Most Popular',
  },
  {
    title: 'Builder Gel Sculpted Tips — Medium',
    desc: 'A very sturdy gel extension.',
    price: 'R650',
    badge: null,
  },
  {
    title: 'Builder Gel Sculpted Tips — Long',
    desc: 'A very sturdy gel extension.',
    price: 'R700',
    badge: null,
  },
  {
    title: 'Builder Gel Sculpted Tips — XXL',
    desc: 'A very sturdy gel extension.',
    price: 'R790',
    badge: null,
  },
  {
    title: 'Rubber Base Fill',
    desc: 'A fill-in of matching product near the cuticle.',
    price: 'R350',
    badge: null,
  },
  {
    title: 'Builder Gel Fill',
    desc: 'A fill-in of matching product near the cuticle.',
    price: 'R420',
    badge: null,
  },
  {
    title: 'Bye Bye, Nails!',
    desc: 'A soak off / removal of your nail enhancements.',
    price: 'R90',
    badge: null,
  },
  {
    title: 'Foreign Product Removal',
    desc: 'Removal of product applied elsewhere.',
    price: 'R130',
    badge: null,
  },
  {
    title: 'Twinkle Toes',
    desc: 'Simply a cut, prep and paint kind of pedi.',
    price: 'R420',
    badge: null,
  },
  {
    title: 'Treat Your Feet',
    desc: 'Adding an extra layer of relaxation to your pedi with a scrub and a massage.',
    price: 'R520',
    badge: null,
  },
  {
    title: 'Ultra Repair Pedi',
    desc: 'Cracked heels? Say no more with our heel peal, scrub and massage.',
    price: 'R600',
    badge: null,
  },
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services__header">
          <h2>
            Our{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Services</em>
          </h2>
          <span className="services__arrow">&#8594;</span>
        </div>

        <div className="services__grid">
          {SERVICES.map(({ title, desc, price }) => (
            <article key={title} className="svc-card">
              <div className="svc-card__body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="svc-card__price">{price}</span>
                <a href="#booking" className="btn btn-outline svc-card__btn">
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="services__pricelist-row">
          <Link to="/pricelist" className="btn btn-pink">
            View Full Price List
          </Link>
        </div>
      </div>
    </section>
  )
}
