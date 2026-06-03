import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Marquee from '../components/Marquee'
import { useSeo } from '../utils/useSeo'
import './FAQ.css'

const FAQS = [
  {
    q: 'Do I need to book in advance?',
    a: 'Yes — we recommend booking ahead via Fresha to secure your preferred time slot. Walk-ins are welcome subject to availability, but booking guarantees your spot.',
  },
  {
    q: 'How long does a full set take?',
    a: 'A Builder Gel Sculpted Tips set typically takes 90–120 minutes. Gel overlays and rubber base sets are usually 60–90 minutes. Please allow extra time if you\'re adding nail art.',
  },
  {
    q: 'How do I know which service is right for me?',
    a: 'If you have natural nails and want colour and shine, a Gel Overlay or Rubber Base Gel is ideal. For length and extra strength, Builder Gel Sculpted Tips is our most popular option. Our techs are happy to advise during your appointment.',
  },
  {
    q: 'How long do gel nails last?',
    a: 'With proper care, gel nails last 3–4 weeks. Avoid prolonged water exposure, wear gloves when cleaning, and moisturise your cuticles daily to extend the life of your set.',
  },
  {
    q: 'Can you remove nails done at another salon?',
    a: 'Yes — we offer a Foreign Product Removal service at R130. Please book this as a separate service so we can allocate enough time.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'We kindly ask for at least 24 hours\' notice if you need to cancel or reschedule. Late cancellations or no-shows may incur a fee. You can manage your booking directly through Fresha.',
  },
  {
    q: 'Do you do events and brand activations?',
    a: 'Absolutely — we have worked with brands including Nike, Converse, Puma and Factorie. Contact us directly at fiery.itsyourspark@gmail.com to discuss your event.',
  },
  {
    q: 'Where are you located?',
    a: '47 Carcarisbrookisbrook Street, Sydenham, Johannesburg. Free street parking is available nearby.',
  },
  {
    q: 'What are your trading hours?',
    a: 'We are open Monday to Friday, 9am – 1pm and 2pm – 6pm.',
  },
]

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FAQ() {
  useSeo({
    title: 'FAQ | Fiery Nailbar Johannesburg',
    description:
      'Answers to common questions about Fiery Nailbar — booking, service times, how long gel nails last, removals, location, and trading hours in Sydenham, Johannesburg.',
    path: '/faq',
    breadcrumbName: 'FAQ',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      <header className="site-header">
        <Navbar />
        <Marquee />
      </header>
      <main className="faq-page">
        <div className="container faq-page__inner">
          <Link to="/" className="faq-page__back">&#8592; Back to Home</Link>
          <h1 className="faq-page__heading">
            Frequently Asked{' '}
            <em className="text-pink" style={{ fontStyle: 'italic' }}>Questions</em>
          </h1>
          <div className="faq-list">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3 className="faq-item__q">{q}</h3>
                <p className="faq-item__a">{a}</p>
              </div>
            ))}
          </div>
          <a href="/#booking" className="btn btn-pink faq-page__cta">Book an Appointment</a>
        </div>
      </main>
    </>
  )
}
