import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './ModesSplit.module.css'

function ModesSplit() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const [giftChoice, setGiftChoice] = useState<'keep' | 'cash'>('cash')

  return (
    <section className="section section--surface" id="modes">
      <div className="wrap">
        <div className="sectionHead">
          <h2>Two modes. One wallet. Maximum celebration.</h2>
          <p>
            Whether you are tearing up the dance floor with crisp digital Naira or sending a
            thoughtful keepsake from the registry, SprayBee keeps the vibe unforgettable.
          </p>
        </div>
        <div
          ref={ref}
          className={`${styles.modes} reveal ${isVisible ? 'revealVisible' : ''}`}
        >
          {/* Mode 1: The Spray Floor */}
          <div className={`${styles.card} ${styles.cardSpray}`}>
            <div className={styles.cardTop}>
              <div className={styles.tagsRow}>
                <span className={`${styles.tag} ${styles.tagSpray}`}>The Spray Floor</span>
                <span className={styles.badgePill}>Live Owambe Mode</span>
              </div>
              <h3 className={styles.cardTitle}>Cards fan out. You swipe. The party erupts.</h3>
              <p className={styles.cardBody}>
                Feel the authentic rush of spraying crisp Naira without carrying physical bundles of
                cash or losing 20% to black-market currency changers. Swipe denomination cards that
                burst across the venue’s live projection screens with custom audio-visual effects.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>⚡</span> 3D swipe physics synced to the DJ’s rhythm
                </li>
                <li className={styles.featureItem}>
                  <span>🖥️</span> Real-time big-screen projection & Chief Sprayer honors
                </li>
                <li className={styles.featureItem}>
                  <span>🛡️</span> 100% legal, clean-note compliant & anti-mutilation verified
                </li>
              </ul>
            </div>

            {/* Simulated Live Spray Screen Alert */}
            <div className={styles.mockPanel} aria-label="Simulated spray event projection">
              <div className={styles.mockHeader}>
                <span>LIVE PROJECTION BROADCAST</span>
                <span>● SYNCED</span>
              </div>
              <div className={styles.mockContent}>
                <div className={styles.mockAlert}>👑 Tunde O. sprayed ₦50,000!</div>
                <div className={styles.chipsRow}>
                  <span className={styles.denomChip}>₦200</span>
                  <span className={styles.denomChip}>₦500</span>
                  <span className={styles.denomChip}>₦1,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mode 2: The Gift Vault */}
          <div className={`${styles.card} ${styles.cardGift}`}>
            <div className={styles.cardTop}>
              <div className={styles.tagsRow}>
                <span className={`${styles.tag} ${styles.tagGift}`}>The Gift Vault</span>
                <span className={styles.badgePill}>Curated Registry</span>
              </div>
              <h3 className={styles.cardTitle}>Curated wishlists or spontaneous love. Cash or keep.</h3>
              <p className={styles.cardBody}>
                Browse wedding and birthday wishlists curated from Nigeria’s premier home, luxury,
                and retail stores. The celebrant holds total power: accept doorstep delivery of the
                actual item, or convert 100% of its monetary value into instant bank cash.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>
                  <span>🎁</span> Handpicked registries from verified Nigerian brands
                </li>
                <li className={styles.featureItem}>
                  <span>🔄</span> 1-Click instant conversion to liquid cash
                </li>
                <li className={styles.featureItem}>
                  <span>🚚</span> White-glove doorstep delivery across Lagos, Abuja & nationwide
                </li>
              </ul>
            </div>

            {/* Interactive Gift Redemption Preview */}
            <div className={styles.mockPanel} aria-label="Simulated gift decision toggle">
              <div className={styles.mockHeader}>
                <span>CELEBRANT REDEMPTION FREEDOM</span>
                <span>DE'LONGHI ESPRESSO MACHINE</span>
              </div>
              <div className={styles.giftToggleRow}>
                <button
                  type="button"
                  onClick={() => setGiftChoice('keep')}
                  className={`${styles.toggleBtn} ${giftChoice === 'keep' ? styles.toggleCash : styles.toggleKeep}`}
                >
                  🎁 Deliver to Doorstep
                </button>
                <button
                  type="button"
                  onClick={() => setGiftChoice('cash')}
                  className={`${styles.toggleBtn} ${giftChoice === 'cash' ? styles.toggleCash : styles.toggleKeep}`}
                >
                  ₦ Convert to Cash (₦280,000)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModesSplit
