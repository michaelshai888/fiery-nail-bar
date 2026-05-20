import './Booking.css'

const FRESHA_URL = 'https://www.fresha.com/en-GB/a/fiery-johannesburg-47-carisbrook-street-l1yhcnc9'

export default function Booking() {
  return (
    <section id="booking" className="booking section">
      <div className="container booking__inner">
        {/* Info */}
        <div className="booking__info">
          <p className="booking__eyebrow">Reserve Your Spot</p>
          <h2>
            Book an{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Appointment</em>
          </h2>
          <p className="booking__desc">
            Ready to treat yourself? Book instantly through Fresha — choose your
            service, pick a time, and you&apos;re all set in seconds.
          </p>

          <ul className="booking__details">
            <li>
              <span>📍</span>
              <div><strong>Location</strong><span>47 Carrisbrook Street, Sydenham, Johannesburg</span></div>
            </li>
            <li>
              <span>🕐</span>
              <div><strong>Hours</strong><span>Mon–Fri: 9am – 1pm &nbsp;|&nbsp; 2pm – 6pm</span></div>
            </li>
            <li>
              <span>📞</span>
              <div><strong>Phone</strong><span>+27 71 175 8696</span></div>
            </li>
            <li>
              <span>✉️</span>
              <div><strong>Email</strong><span>fiery.itsyourspark@gmail.com</span></div>
            </li>
          </ul>
        </div>

        {/* Fresha card */}
        <div className="booking__card">
          <span className="booking__card-icon">📅</span>
          <h3>Book Instantly on Fresha</h3>

          <ul className="booking__perks">
            <li><span>✓</span> Real-time availability</li>
            <li><span>✓</span> Instant confirmation</li>
            <li><span>✓</span> Auto reminders</li>
          </ul>

          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-pink booking__cta"
          >
            Book on Fresha
            <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" className="booking__arrow">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <p className="booking__note">Powered by <strong>Fresha</strong> — the world&apos;s #1 salon booking platform</p>
        </div>
      </div>
    </section>
  )
}
