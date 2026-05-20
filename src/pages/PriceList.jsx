import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from '../components/Marquee'
import './PriceList.css'

export default function PriceList() {
  return (
    <>
      <header className="site-header">
        <Navbar />
        <Marquee />
      </header>
      <main className="pricelist-page">
        <div className="container pricelist-page__inner">
          <a href="/#services" className="pricelist-page__back">
            &#8592; Back to Home
          </a>
          <h1 className="pricelist-page__heading">
            Our <em className="text-pink" style={{ fontStyle: 'italic' }}>Price List</em>
          </h1>
          <img
            src="/assets/pricelist.png"
            alt="Fiery Nailbar Price List"
            className="pricelist-page__img"
          />
          <a href="/#booking" className="btn btn-pink pricelist-page__cta">
            Book Now
          </a>
        </div>
      </main>
    </>
  )
}
