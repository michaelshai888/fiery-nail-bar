import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Marquee        from './components/Marquee'
import Intro          from './components/Intro'
import Services       from './components/Services'
import Team           from './components/Team'
import Portfolio      from './components/Portfolio'
import Events         from './components/Events'
import About          from './components/About'
import Testimonials   from './components/Testimonials'
import Booking        from './components/Booking'
import Footer         from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <header className="site-header">
        <Navbar />
        <Marquee />
      </header>

      <main>
        <Hero />
        <Marquee />
        <Intro />
        <Team />
        <Marquee />
        <Portfolio />
        <Services />
        <Events />
        <About />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
    </>
  )
}
