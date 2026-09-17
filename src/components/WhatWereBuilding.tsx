import type { FeatureItem } from '../types'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './WhatWereBuilding.module.css'

const features: FeatureItem[] = [
  {
    title: 'Tiered wallets, zero friction',
    description:
      "Join with just a phone number. Spray up to ₦50,000 right away — verify with BVN or NIN later for higher limits.",
  },
  {
    title: 'Live event screens',
    description:
      'Partner venues show the spray feed and leaderboard on-screen in real time, right where the party is happening.',
  },
  {
    title: 'Gifting, not just spraying',
    description:
      'Browse a registry or gift spontaneously from partner stores — celebrants choose to keep the item or cash out.',
  },
  {
    title: 'Built for retail partners',
    description:
      'Stores list products as giftable items and get discovered by guests actively gifting at events near them.',
  },
]

function FeatureCard({ feature, index }: { feature: FeatureItem; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${styles.card} reveal ${isVisible ? 'revealVisible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={styles.marker} />
      <h3 className={styles.cardTitle}>{feature.title}</h3>
      <p className={styles.cardBody}>{feature.description}</p>
    </div>
  )
}

function WhatWereBuilding() {
  return (
    <section className="section section--paper" id="what-were-building">
      <div className="wrap">
        <div className="sectionHead">
          <h2>What we're building</h2>
          <p>A full celebration platform — not just a spray button.</p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard feature={feature} index={index} key={feature.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWereBuilding
