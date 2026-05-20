import { useState } from 'react'
import { asset } from '../utils/asset'
import './Portfolio.css'

const ALL_PHOTOS = [
  asset('/assets/portfolio/FullSizeRender.jpeg'),
  asset('/assets/portfolio/FullSizeRender%20(1).jpeg'),
  asset('/assets/portfolio/FullSizeRender%20(2).jpeg'),
  asset('/assets/portfolio/FullSizeRender%202.jpeg'),
  asset('/assets/portfolio/IMG_1794.jpeg'),
  asset('/assets/portfolio/IMG_1849.jpeg'),
  asset('/assets/portfolio/IMG_1991.jpeg'),
  asset('/assets/portfolio/IMG_2166.jpeg'),
  asset('/assets/portfolio/IMG_2812.jpeg'),
  asset('/assets/portfolio/IMG_2833.jpeg'),
  asset('/assets/portfolio/IMG_3020.jpeg'),
  asset('/assets/portfolio/IMG_3189.jpeg'),
  asset('/assets/portfolio/IMG_3298.jpeg'),
  asset('/assets/portfolio/IMG_3610.jpeg'),
  asset('/assets/portfolio/IMG_3667.jpeg'),
  asset('/assets/portfolio/IMG_3746.jpeg'),
  asset('/assets/portfolio/IMG_5336.jpeg'),
  asset('/assets/portfolio/IMG_5820.jpeg'),
  asset('/assets/portfolio/IMG_5824.jpeg'),
  asset('/assets/portfolio/IMG_5829.jpeg'),
  asset('/assets/portfolio/IMG_5866.jpeg'),
  asset('/assets/portfolio/IMG_6615.jpeg'),
  asset('/assets/portfolio/IMG_6626.jpeg'),
  asset('/assets/portfolio/IMG_7034.jpeg'),
  asset('/assets/portfolio/IMG_7196.jpeg'),
  asset('/assets/portfolio/IMG_7338.jpeg'),
  asset('/assets/portfolio/IMG_7445.jpeg'),
  asset('/assets/portfolio/IMG_7718.jpeg'),
  asset('/assets/portfolio/IMG_7931.jpeg'),
  asset('/assets/portfolio/IMG_7964.jpeg'),
  asset('/assets/portfolio/IMG_8242.jpeg'),
  asset('/assets/portfolio/IMG_8266.jpeg'),
  asset('/assets/portfolio/IMG_9301.jpeg'),
  asset('/assets/portfolio/422BA37A-4ED5-452A-997F-3DFF02EB2B95.JPG'),
]

const ARTISTS = [
  {
    id: 'zara',
    name: 'Keiren Faurie',
    title: 'Head Nail Artist and Owner',
    ig: 'https://www.instagram.com/fiery_nailbar',
    items: ALL_PHOTOS.map((src, i) => ({ id: `z${i}`, src })),
  },
  {
    id: 'kezia',
    name: 'Megan Woods',
    title: 'Creative Nail Artist',
    ig: 'https://www.instagram.com/megs_nail_tech',
    items: ALL_PHOTOS.map((src, i) => ({ id: `k${i}`, src })),
  },
]

function ArtistGallery({ artist }) {
  return (
    <div className={`artist-gallery artist-gallery--${artist.id}`}>
      <div className="artist-gallery__meta">
        <span className="artist-gallery__title">{artist.title}</span>
        <a
          href={artist.ig}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__ig-link"
        >
          See more on Instagram &#8594;
        </a>
      </div>

      <div className="portfolio__grid--3col">
        {artist.items.map(({ id, src }) => (
          <div key={id} className="pf-item">
            <img src={src} alt="" className="pf-item__img" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeArtist, setActiveArtist] = useState('zara')
  const current = ARTISTS.find(a => a.id === activeArtist)

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="portfolio__top-header">
          <h2>
            Our{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Portfolio</em>
          </h2>
          <p className="portfolio__subheading">
            Two artists, two distinct styles — explore the work that defines Fiery Nailbar.
          </p>
        </div>

        {/* Artist tabs */}
        <div className="portfolio__artist-tabs" role="tablist" aria-label="Select artist">
          {ARTISTS.map(artist => (
            <button
              key={artist.id}
              role="tab"
              aria-selected={activeArtist === artist.id}
              className={`artist-tab artist-tab--${artist.id}${activeArtist === artist.id ? ' active' : ''}`}
              onClick={() => setActiveArtist(artist.id)}
            >
              <span className="artist-tab__name">{artist.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active artist gallery */}
        <ArtistGallery key={current.id} artist={current} />
      </div>
    </section>
  )
}
