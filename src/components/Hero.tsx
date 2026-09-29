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
          Bringing the joy of cash spraying and gifting into the digital age — for celebrations at home and around the world.
        </p>
        <WaitlistForm />
      </div>
      <SprayCardFan />
    </div>
  )
}

export default Hero
