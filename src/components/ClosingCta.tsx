import WaitlistForm from './WaitlistForm'
import styles from './ClosingCta.module.css'

function ClosingCta() {
  return (
    <section className={`section section--dark ${styles.cta}`} id="join">
      <div className="wrap">
        <h2 className={styles.heading}>Be first to spray when we launch.</h2>
        <p className={styles.subheading}>
          No spam — just one email the moment the app is live.
        </p>
        <WaitlistForm variant="dark" />
      </div>
    </section>
  )
}

export default ClosingCta
