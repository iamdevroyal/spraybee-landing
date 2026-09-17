import { useRoute } from './router'
import { usePageSEO } from './seo'
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

  // Dynamically updates Title, Meta Description, Canonical, OG, and Twitter tags
  usePageSEO(route)

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
