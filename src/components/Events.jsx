import { asset } from '../utils/asset'
import './Events.css'

const EVENTS = [
  {
    id: 1,
    title: 'Factorie Activation',
    tag: 'Brand Activation',
    src: asset('/assets/events/eab3c8bb-f2c6-4abb-8981-78e7f40aaeea.JPG'),
    description: 'Fiery Nailbar brought the nail experience to a Factorie brand activation, delivering on-the-spot nail art and gel services for guests at the event.',
  },
  {
    id: 2,
    title: 'Nike Activation — Dearest Friends',
    tag: 'Brand Activation',
    src: asset('/assets/events/eab3c8bb-f2c6-4abb-8981-78e7f40aaeea.JPG'),
    description: 'Partnered with Nike for the Dearest Friends activation, creating custom nail looks that matched the campaign\'s bold, expressive aesthetic.',
  },
  {
    id: 3,
    title: 'Nike Two Oceans Marathon',
    tag: 'Sponsored Event',
    src: asset('/assets/events/eab3c8bb-f2c6-4abb-8981-78e7f40aaeea-2.JPG'),
    description: 'Fiery Nailbar was part of the Nike Two Oceans Marathon experience, offering nail services to athletes and guests celebrating one of South Africa\'s most iconic races.',
  },
  {
    id: 4,
    title: 'Converse Activation',
    tag: 'Brand Activation',
    src: asset('/assets/events/eab3c8bb-f2c6-4abb-8981-78e7f40aaeea.JPG'),
    description: 'Brought Fiery\'s signature nail artistry to a Converse brand activation, complementing the brand\'s creative, street-culture energy with bold nail designs.',
  },
  {
    id: 5,
    title: 'Puma Activation',
    tag: 'Brand Activation',
    src: asset('/assets/events/eab3c8bb-f2c6-4abb-8981-78e7f40aaeea.JPG'),
    description: 'Teamed up with Puma for a high-energy brand activation, delivering fast, flawless nail services that matched the brand\'s sport-meets-style identity.',
  },
]

const TAG_COLOURS = {
  'Brand Activation': { bg: 'rgba(240,59,142,.12)', clr: 'var(--clr-primary)' },
  'Sponsored Event':  { bg: 'rgba(232,118,44,.12)',  clr: 'var(--clr-amber)' },
}

export default function Events() {
  return (
    <section id="events" className="events section">
      <div className="container">
        <div className="events__header">
          <p className="events__eyebrow">Beyond the Studio</p>
          <h2>
            Our{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Events</em>
          </h2>
          <p className="events__subheading">
            From brand activations to sponsored races — here&apos;s where Fiery Nailbar has shown up.
          </p>
        </div>

        <div className="events__grid">
          {EVENTS.map(({ id, title, tag, description, src }) => {
            const colours = TAG_COLOURS[tag] || TAG_COLOURS['Brand Activation']
            return (
              <article key={id} className="event-card">
                {src ? (
                  <img src={src} alt={title} className="event-card__img" loading="lazy" />
                ) : (
                  <div className={`event-card__img event-card__img--placeholder event-card__img--${id}`} aria-hidden="true" />
                )}
                <div className="event-card__body">
                  <div className="event-card__meta">
                    <span
                      className="event-card__tag"
                      style={{ background: colours.bg, color: colours.clr }}
                    >
                      {tag}
                    </span>
                  </div>
                  <h3 className="event-card__title">{title}</h3>
                  <p className="event-card__desc">{description}</p>
                </div>
              </article>
            )
          })}
        </div>
        <p className="events__booking-note">
          Interested in booking Fiery Nailbar for your next brand event or activation?{' '}
          <a href="#contact">Contact the studio</a> to discuss availability.
        </p>
      </div>
    </section>
  )
}
