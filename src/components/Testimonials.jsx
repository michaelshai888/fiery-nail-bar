import './Testimonials.css'

const REVIEWS = [
  {
    name: 'Tali P.',
    initials: 'TP',
    stars: 5,
    service: 'Nail Art',
    text: "Always the best experience at Fiery! My nails are beautiful as always and we had lot's of fun while we were at it! Can't recommend them highly enough!",
  },
  {
    name: 'Leah B',
    initials: 'LB',
    stars: 5,
    service: 'Gel Nails',
    text: "Couldn't recommend highly enough! Always thrilled with my nails",
  },
  {
    name: 'Amy C.',
    initials: 'AC',
    stars: 5,
    service: 'Nail Art',
    text: "I'm in love with my set 10/10",
  },
  {
    name: 'Donna B.',
    initials: 'DB',
    stars: 5,
    service: 'Acrylics',
    text: "Megan is THAT girl",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section scallop-bottom">
      <div className="container">
        <div className="testimonials__header">
          <h2>
            What They{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Say</em>
          </h2>
          <div className="testimonials__stars-row" aria-label="Average rating 5 stars">
            {'★★★★★'}
            <span>5 stars on Fresha</span>
          </div>
        </div>

        <div className="testimonials__grid">
          {REVIEWS.map(({ name, initials, stars, service, text }) => (
            <blockquote key={name} className="review-card">
              <div className="review-card__stars" aria-label={`${stars} stars`}>
                {'★'.repeat(stars)}
              </div>
              <p className="review-card__text">&ldquo;{text}&rdquo;</p>
              <footer className="review-card__footer">
                <div className="review-card__avatar" aria-hidden="true">{initials}</div>
                <div>
                  <cite className="review-card__name">{name}</cite>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
