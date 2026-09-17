import { navigateTo } from '../router'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/')
  }

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/privacy')
  }

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/terms')
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/contact')
  }

  const handleHashLink = (e: React.MouseEvent, hash: string) => {
    e.preventDefault()
    if (window.location.pathname !== '/' && window.location.pathname !== '') {
      navigateTo('/')
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = ['Instagram', 'X (Twitter)', 'TikTok']

  return (
    <footer className={`section--dark ${styles.footer}`}>
      <div className={`wrap ${styles.top}`}>
        <div className={styles.brandCol}>
          <a
            href="/"
            onClick={handleHomeClick}
            className={styles.logo}
            style={{ textDecoration: 'none' }}
          >
            SprayBee
          </a>
          <p className={styles.tagline}>
            Spray the moment. Gift the memory. Built for Nigerian celebrations.
          </p>
          <div className={styles.social}>
            {socialLinks.map((label) => (
              <a key={label} href="#" className={styles.socialLink}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnHeading}>Product</div>
            <ul className={styles.columnList}>
              <li>
                <a href="#how-it-works" onClick={(e) => handleHashLink(e, '#how-it-works')}>
                  How it works
                </a>
              </li>
              <li>
                <a href="#modes" onClick={(e) => handleHashLink(e, '#modes')}>
                  Spray &amp; Gift
                </a>
              </li>
              <li>
                <a href="#app" onClick={(e) => handleHashLink(e, '#app')}>
                  The app
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeading}>Partners</div>
            <ul className={styles.columnList}>
              <li>
                <a href="#partners" onClick={(e) => handleHashLink(e, '#partners')}>
                  For event centers
                </a>
              </li>
              <li>
                <a href="#partners" onClick={(e) => handleHashLink(e, '#partners')}>
                  For retail stores
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHeading}>Company</div>
            <ul className={styles.columnList}>
              <li>
                <a href="#join" onClick={(e) => handleHashLink(e, '#join')}>
                  Get notified
                </a>
              </li>
              <li>
                <a href="/contact" onClick={handleContactClick}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">
        SprayBee
      </div>

      <div className={`wrap ${styles.bottom}`}>
        <div>© {year} SprayBee Technologies Ltd. Made for the culture.</div>
        <div className={styles.legal}>
          <a href="/privacy" onClick={handlePrivacyClick}>
            Privacy Policy
          </a>
          <a href="/terms" onClick={handleTermsClick}>
            Terms of Service
          </a>
          <a href="/contact" onClick={handleContactClick}>
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
