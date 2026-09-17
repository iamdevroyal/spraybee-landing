import { useState } from 'react'
import { navigateTo } from '../router'
import Footer from '../components/Footer'
import styles from './ContactUs.module.css'

function ContactUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('Event Inquiry')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const whatsappNumber = '07035148792'
  const whatsappUrl = `https://wa.me/2347035148792?text=${encodeURIComponent(
    'Hello SprayBee Team, I would like to inquire about SprayBee celebration spraying & gifting services...',
  )}`

  return (
    <div className={styles.page}>
      {/* Sticky Header Nav */}
      <header className={styles.topBar}>
        <div className={`wrap ${styles.topBarInner}`}>
          <a href="/" onClick={handleHomeClick} className={styles.brandLink}>
            SprayBee
          </a>
          <button type="button" onClick={handleHomeClick} className={styles.backBtn}>
            <span>←</span> Back to Home
          </button>
        </div>
      </header>

      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="wrap">
          <div className={styles.badgeRow}>
            <span className={styles.badge}>Get in Touch</span>
          </div>
          <h1 className={styles.title}>Contact SprayBee</h1>
          <p className={styles.subtitle}>
            Have a question about an upcoming celebration, need live event screen support, or
            exploring a partnership? Reach our Nigerian concierge team instantly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="wrap">
        <div className={styles.grid}>
          {/* Left Column: WhatsApp & Direct Contact Channels */}
          <div>
            {/* Primary WhatsApp Hero Card */}
            <div className={styles.whatsappHeroCard}>
              <div className={styles.whatsappHeader}>
                <span className={styles.whatsappTag}>⚡ Fastest Response</span>
                <div className={styles.liveStatus}>
                  <span className={styles.pulseDot} />
                  <span>Online • Typically replies in minutes</span>
                </div>
              </div>

              <div>
                <h2 className={styles.whatsappTitle}>Chat Directly on WhatsApp</h2>
                <p className={styles.whatsappDesc}>
                  Whether you are planning a wedding, checking event spray codes, or setting up a
                  venue screen, our support team is available on WhatsApp daily from 8 AM to 11 PM
                  WAT.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <span className={styles.whatsappIcon}>💬</span>
                <span>Chat on WhatsApp ({whatsappNumber})</span>
              </a>
            </div>

            {/* Secondary Direct Channels */}
            <div className={styles.channelsGrid}>
              <div className={styles.channelCard}>
                <span className={styles.channelIcon}>📞</span>
                <span className={styles.channelLabel}>Phone Support</span>
                <a href="tel:+2347035148792" className={styles.channelValue}>
                  +234 703 514 8792
                </a>
                <span className={styles.channelSub}>Mon - Sun (8am - 11pm WAT)</span>
              </div>

              <div className={styles.channelCard}>
                <span className={styles.channelIcon}>✉️</span>
                <span className={styles.channelLabel}>Email Inquiries</span>
                <a href="mailto:hello@spraybee.app" className={styles.channelValue}>
                  hello@spraybee.app
                </a>
                <span className={styles.channelSub}>General & event support</span>
              </div>

              <div className={styles.channelCard}>
                <span className={styles.channelIcon}>🏛️</span>
                <span className={styles.channelLabel}>Venue Partnerships</span>
                <a href="mailto:partners@spraybee.app" className={styles.channelValue}>
                  partners@spraybee.app
                </a>
                <span className={styles.channelSub}>Halls, DJs & Event Planners</span>
              </div>

              <div className={styles.channelCard}>
                <span className={styles.channelIcon}>📍</span>
                <span className={styles.channelLabel}>Corporate Office</span>
                <span className={styles.channelValue}>Victoria Island</span>
                <span className={styles.channelSub}>Lagos State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Send Us a Message</h3>
            <p className={styles.formSubtitle}>
              Fill out the form below and a representative will follow up via email or phone.
            </p>

            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h4>Message Received! 🎉</h4>
                <p>
                  Thank you, <strong>{name}</strong>. We have received your inquiry and will reach out
                  to you at <strong>{email || phone}</strong> shortly.
                </p>
                <p>Need faster help? Tap the WhatsApp button to chat with us right away!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label className={styles.label}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Adebayo Adeleke"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="adebayo@example.com"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Phone Number (WhatsApp Preferred) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08012345678"
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Inquiry Subject *</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={styles.select}
                  >
                    <option value="Event Inquiry">Booking SprayBee for an Upcoming Event</option>
                    <option value="Celebrant Setup">Celebrant Bank Account & Cash-Out Query</option>
                    <option value="Venue Screen Setup">Event Hall / LED Screen Integration</option>
                    <option value="Retail Partner">Becoming a Retail / Gifting Partner</option>
                    <option value="General Support">General Support or Feedback</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Your Message *</label>
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your event, expected guest count, or question..."
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? 'Sending Message...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ContactUs
