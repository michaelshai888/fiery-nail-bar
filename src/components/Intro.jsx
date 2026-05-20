import './Intro.css'

function CircleStamp() {
  const text = 'BOOK NOW  •  FIERY NAILBAR  •  '
  return (
    <svg viewBox="0 0 110 110" className="intro__stamp-svg" aria-hidden="true">
      <defs>
        <path
          id="circlePath"
          d="M55,55 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
        />
      </defs>
      <text fontSize="9.5" fill="currentColor" fontWeight="700" letterSpacing="2.5">
        <textPath href="#circlePath">{text}</textPath>
      </text>
      <text x="55" y="61" textAnchor="middle" fontSize="22">💗</text>
    </svg>
  )
}

export default function Intro() {
  return (
    <section className="intro scallop-bottom">
      <CircleStamp />
      <div className="container intro__content">
        <h2 className="intro__heading">
          Indulge.{' '}
          <em className="text-pink">Elevate.</em>{' '}
          Express.
          <br />
          Where nails become a{' '}
          <em className="text-amber" style={{ fontStyle: 'italic' }}>statement</em>.
          <br />
          We believe{' '}
          <em className="text-pink" style={{ fontStyle: 'italic' }}>every detail</em>{' '}
          matters.
        </h2>
        <p className="intro__body">
          Fiery Nailbar is Johannesburg&apos;s home for bold nail artistry, expert care, and
          a welcome that makes you feel like the main character every single time.
        </p>
        <a href="#booking" className="btn btn-accent">Book Now</a>
      </div>
    </section>
  )
}
