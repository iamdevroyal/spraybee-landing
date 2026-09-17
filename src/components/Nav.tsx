import { navigateTo } from '../router'
import styles from './Nav.module.css'

function Nav() {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/')
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/contact')
  }

  return (
    <div className={styles.navOuter}>
      <nav className={styles.nav}>
        <a
          href="/"
          onClick={handleLogoClick}
          className={styles.logo}
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          SprayBee
        </a>
        <div className={styles.links}>
          <a href="#how-it-works">How it works</a>
          <a href="#modes">Spray &amp; Gift</a>
          <a href="#partners">Partners</a>
          <a href="/contact" onClick={handleContactClick}>
            Contact
          </a>
        </div>
        <a href="#join" className={styles.cta}>
          Get notified
        </a>
      </nav>
    </div>
  )
}

export default Nav
