import { useEffect } from 'react'
import { useRoute } from './router'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ContextStrip from './components/ContextStrip'
import HowItWorks from './components/HowItWorks'
import ModesSplit from './components/ModesSplit'
import AppShowcase from './components/AppShowcase'
import LeaderboardTeaser from './components/LeaderboardTeaser'
import WhatWereBuilding from './components/WhatWereBuilding'
import PartnersSection from './components/PartnersSection'
import ClosingCta from './components/ClosingCta'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ContactUs from './pages/ContactUs'

function App() {
  const route = useRoute()

  useEffect(() => {
    if (route === 'privacy') {
      document.title = 'Privacy Policy — SprayBee'
    } else if (route === 'terms') {
      document.title = 'Terms of Service — SprayBee'
    } else if (route === 'contact') {
      document.title = 'Contact Us — SprayBee'
    } else {
      document.title = 'SprayBee — Spray the moment. Gift the memory.'
    }
  }, [route])

  if (route === 'privacy') {
    return <PrivacyPolicy />
  }

  if (route === 'terms') {
    return <TermsOfService />
  }

  if (route === 'contact') {
    return <ContactUs />
  }

  return (
    <>
      <Nav />
      <div className="wrap">
        <Hero />
      </div>
      <ContextStrip />
      <HowItWorks />
      <ModesSplit />
      <AppShowcase />
      <LeaderboardTeaser />
      <WhatWereBuilding />
      <PartnersSection />
      <ClosingCta />
      <Footer />
    </>
  )
}

export default App
