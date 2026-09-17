import SprayCardFan from './SprayCardFan'
import WaitlistForm from './WaitlistForm'
import styles from './Hero.module.css'

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <h1 className={styles.heading}>
          Spray the moment.
          <br />
          Gift the memory.
        </h1>
        <p className={styles.subcopy}>
          The digital way to spray cash and send gifts at Nigerian celebrations — no mutilated
          notes, no cash to carry, just the vibe.
        </p>
        <WaitlistForm />
      </div>
      <SprayCardFan />
    </div>
  )
}

export default Hero
