import { asset } from '../utils/asset'
import './Team.css'

const ARTISTS = [
  {
    id: 'zara',
    name: 'Keiren Faurie',
    title: 'Head Nail Artist and Owner',
    photo: asset('/assets/meet-your-artists/_MG_0804.JPG'),
    specialties: ['Gel Nails', 'French Tips', 'Acrylics'],
    bio: 'With over 7 years of experience, Keiren brings precision and elegance to every set. Known for her flawless gel application and immaculate French tips, she has built a loyal clientele who trust her for clean, classic and long-lasting results.',
    ig: 'https://www.instagram.com/fiery_nailbar',
  },
  {
    id: 'kezia',
    name: 'Megan Woods',
    title: 'Creative Nail Artist',
    photo: null,
    specialties: ['Nail Art', 'Seasonal Sets', 'Ombre & Chrome'],
    bio: 'Megan is the creative force behind Fiery Nailbar\'s most eye-catching designs. From intricate hand-painted florals to bold geometric patterns and chrome finishes, her nails are wearable art. If you can dream it, she can paint it.',
    ig: 'https://www.instagram.com/megs_nail_tech',
  },
]

export default function Team() {
  return (
    <section id="team" className="team section">
      <div className="container">
        <div className="team__header">
          <p className="team__eyebrow">The Talent Behind the Magic</p>
          <h2>
            Meet Your{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Artists</em>
          </h2>
          <p className="team__subheading">
            Two passionate nail technicians, one shared vision — nails that turn heads.
          </p>
        </div>

        <div className="team__grid">
          {ARTISTS.map((artist) => (
            <article key={artist.id} className="team-card">
              <div className="team-card__img-wrap">
                {artist.photo ? (
                  <img
                    src={artist.photo}
                    alt={`Photo of ${artist.name}`}
                    className="team-card__img"
                  />
                ) : (
                  <div className={`team-card__img team-card__img--placeholder team-card__img--${artist.id}`}
                    aria-label={`Photo of ${artist.name} coming soon`}
                  >
                    <span className="team-card__initials">
                      {artist.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div className="team-card__badge">{artist.title}</div>
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">{artist.name}</h3>
                <p className="team-card__bio">{artist.bio}</p>
                <a
                  href={artist.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card__ig"
                >
                  View on Instagram &#8594;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
