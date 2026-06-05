import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Ticker           from './components/Ticker'
import ValueProps       from './components/ValueProps'
import Services         from './components/Services'
import WhyUs            from './components/WhyUs'
import Process          from './components/Process'
import TechStack        from './components/TechStack'
import Testimonials     from './components/Testimonials'
import CTA              from './components/CTA'
import ConsultationForm from './components/ConsultationForm'
import Footer           from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ValueProps />
        <Services />
        <WhyUs />
        <Process />
        <TechStack />
        <Testimonials />
        <CTA />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  )
}
