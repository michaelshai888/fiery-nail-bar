import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from '../components/Marquee'
import { useSeo } from '../utils/useSeo'
import './CancellationPolicy.css'

const SECTIONS = [
  {
    heading: 'Booking & Deposits',
    body: 'All appointments are booked through the Fresha app. Some services may require a deposit at the time of booking to secure your slot. Deposits are deducted from the total cost of your appointment.',
  },
  {
    heading: 'Cancellations',
    body: 'We kindly ask for at least 24 hours\' notice if you need to cancel your appointment. Cancellations made with less than 24 hours\' notice, or appointments not attended without prior notice, may result in a cancellation fee or forfeiture of your deposit.',
  },
  {
    heading: 'Rescheduling',
    body: 'You are welcome to reschedule your appointment at no charge, provided you give at least 24 hours\' notice. Rescheduling requests made within 24 hours of the appointment are treated the same as a late cancellation.',
  },
  {
    heading: 'No-Shows',
    body: 'Repeated no-shows may result in the requirement of a non-refundable deposit for all future bookings, or in the refusal of future appointments at our discretion.',
  },
  {
    heading: 'Late Arrivals',
    body: 'Please arrive on time for your appointment. Arriving more than 15 minutes late may mean we are unable to complete your full service. In this case the appointment may be shortened or rescheduled, and the full service fee may still apply.',
  },
  {
    heading: 'Refunds',
    body: 'We take pride in our work and want you to love your nails. If you have a concern with your service, please contact us within 48 hours of your appointment so we can assess and resolve the issue. Refunds are not offered once the service has been completed and the client has left the studio.',
  },
  {
    heading: 'How to Cancel or Reschedule',
    body: 'Manage your booking directly through the Fresha app, or contact us at fiery.itsyourspark@gmail.com or on +27 71 175 8696.',
  },
]

export default function CancellationPolicy() {
  useSeo({
    title: 'Cancellation Policy | Fiery Nailbar Johannesburg',
    description:
      'Read the Fiery Nailbar cancellation, rescheduling, and no-show policy. We ask for at least 24 hours’ notice to cancel or reschedule your appointment.',
    path: '/cancellation-policy',
  })

  return (
    <>
      <header className="site-header">
        <Navbar />
        <Marquee />
      </header>
      <main className="cancel-page">
        <div className="container cancel-page__inner">
          <Link to="/" className="cancel-page__back">&#8592; Back to Home</Link>
          <h1 className="cancel-page__heading">
            Cancellation{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Policy</em>
          </h1>
          <div className="cancel-list">
            {SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="cancel-item">
                <h3 className="cancel-item__heading">{heading}</h3>
                <p className="cancel-item__body">{body}</p>
              </div>
            ))}
          </div>
          <a href="/#booking" className="btn btn-pink cancel-page__cta">Book an Appointment</a>
        </div>
      </main>
    </>
  )
}
