import useScrollReveal from '../hooks/useScrollReveal'
import styles from './HowItWorks.module.css'

interface StepDetail {
  number: string
  tag: string
  icon: string
  title: string
  description: string
  highlights: string[]
}

const steps: StepDetail[] = [
  {
    number: '01',
    tag: 'Instant Access',
    icon: '📱',
    title: 'Scan & Enter the Vibe',
    description:
      'Scan the event QR code on the table or screen, or type the 4-character party code. No mandatory app downloads, no KYC hurdles—just your phone number and you are inside in 5 seconds.',
    highlights: ['Zero app install required', 'Instant phone verification', 'Direct party wallet top-up'],
  },
  {
    number: '02',
    tag: 'Live Celebration',
    icon: '💸',
    title: 'Swipe to Spray or Gift',
    description:
      'Swipe crisp digital Naira notes (₦20 to ₦1,000) that fly with authentic haptic motion and erupt onto the venue’s live projection screens, or pick registry gifts from Nigeria’s top lifestyle brands.',
    highlights: ['Real-time big-screen sync', '3D denomination fanning', 'Curated wish list gifting'],
  },
  {
    number: '03',
    tag: 'Instant Settlement',
    icon: '⚡',
    title: 'Direct Payout & Zero Wahala',
    description:
      'The celebrant withdraws 100% of sprayed cash directly to their verified Nigerian bank account within 60 seconds. Redeem physical gifts or convert them to cash with a single tap.',
    highlights: ['60-second direct bank payout', '0% currency mutilation', '100% CBN clean-note compliant'],
  },
]

function HowItWorks() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="sectionHead">
          <h2>How SprayBee works</h2>
          <p>
            From the moment you walk into the hall to the final dance, celebrating and gifting has
            never been this seamless.
          </p>
        </div>
        <div
          ref={ref}
          className={`${styles.steps} reveal ${isVisible ? 'revealVisible' : ''}`}
        >
          {steps.map((step) => (
            <div className={styles.stepCard} key={step.number}>
              <div className={styles.headerRow}>
                <span className={styles.numberBadge}>{step.number}</span>
                <span className={styles.stepTag}>{step.tag}</span>
              </div>
              <div className={styles.iconWrap} aria-hidden="true">
                {step.icon}
              </div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <ul className={styles.highlightsList}>
                {step.highlights.map((item) => (
                  <li className={styles.highlightItem} key={item}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
