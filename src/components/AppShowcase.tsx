import appMockup from '../assets/app-mockup.png'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './AppShowcase.module.css'

const highlights = [
  { label: 'Prefund once', detail: 'Top up your wallet before the party — no repeated card entry mid-event.' },
  { label: 'Swipe to spray', detail: 'Pick a denomination and swipe. It lands in the celebrant\u2019s wallet in real time.' },
  { label: 'Cash out instantly', detail: 'Celebrants withdraw straight to their bank account, whenever they choose.' },
]

function AppShowcase() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section className="section" id="app">
      <div className="wrap">
        <div
          ref={ref}
          className={`${styles.showcase} reveal ${isVisible ? 'revealVisible' : ''}`}
        >
          <div className={styles.imageCol}>
            <img
              src={appMockup}
              alt="SprayBee app interface on a phone, with Naira notes spraying out of the screen"
              className={styles.image}
            />
          </div>
          <div className={styles.copyCol}>
            <h2 className={styles.heading}>Your wallet, wherever the party is.</h2>
            <p className={styles.subcopy}>
              SprayBee lives on your phone — join an event, spray or gift in seconds, and watch
              it land instantly. No mutilated notes, no cash to carry home.
            </p>
            <ul className={styles.list}>
              {highlights.map((item) => (
                <li key={item.label} className={styles.listItem}>
                  <span className={styles.listLabel}>{item.label}</span>
                  <span className={styles.listDetail}>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppShowcase
