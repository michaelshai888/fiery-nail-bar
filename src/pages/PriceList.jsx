import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from '../components/Marquee'
import { asset } from '../utils/asset'
import { useSeo } from '../utils/useSeo'
import './PriceList.css'

export default function PriceList() {
  useSeo({
    title: 'Price List | Fiery Nailbar Johannesburg',
    description:
      'View the full price list for Fiery Nailbar — gel overlays, builder gel sculpted tips, rubber base, nail art, and pedicures in Sydenham, Johannesburg.',
    path: '/pricelist',
    breadcrumbName: 'Price List',
  })

  return (
    <>
      <header className="site-header">
        <Navbar />
        <Marquee />
      </header>
      <main className="pricelist-page">
        <div className="container pricelist-page__inner">
          <Link to="/" className="pricelist-page__back">
            &#8592; Back to Home
          </Link>
          <h1 className="pricelist-page__heading">
            Our <em className="text-pink" style={{ fontStyle: 'italic' }}>Price List</em>
          </h1>
          <img
            src={asset('/assets/pricelist.png')}
            alt="Fiery Nailbar Price List"
            className="pricelist-page__img"
          />
          <Link to="/" className="btn btn-pink pricelist-page__cta">
            Book Now
          </Link>
        </div>
      </main>
    </>
  )
}
