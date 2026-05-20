import './Marquee.css'

const ITEMS = [
  '💅 Book Your Appointment',
  '✨ Nail Art Specialists',
  'Fiery Nailbar Johannesburg',
  '💎 Gel · Acrylics · Nail Art',
  'Gel Overlay',
  'Rubber Base Gel',
  'Builder Gel Overlay',
  'Builder Gel Sculpted Tips',
  'Rubber Base Fill',
  'Builder Gel Fill',
  'Bye Bye, Nails!',
  'Foreign Product Removal',
  'Twinkle Toes Pedi',
  'Treat Your Feet Pedi',
  'Ultra Repair Pedi',
]

export default function Marquee() {
  // Duplicate for seamless loop
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__diamond">♦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
