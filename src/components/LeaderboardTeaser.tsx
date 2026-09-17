import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import styles from './LeaderboardTeaser.module.css'

interface LeaderboardItem {
  rank: number
  badge: string
  name: string
  title: string
  amount: string
  rankClass: string
}

const leaderboardData: LeaderboardItem[] = [
  {
    rank: 1,
    badge: '👑',
    name: 'Chidinma A.',
    title: 'Chief Sprayer of the Day',
    amount: '₦250,000',
    rankClass: styles.rank1,
  },
  {
    rank: 2,
    badge: '🥈',
    name: 'Tunde O.',
    title: 'Chairman of the Floor',
    amount: '₦180,000',
    rankClass: styles.rank2,
  },
  {
    rank: 3,
    badge: '🥉',
    name: 'Amaka & Femi',
    title: 'Ballers of the Night',
    amount: '₦125,000',
    rankClass: styles.rank3,
  },
  {
    rank: 4,
    badge: '✨',
    name: 'Dr. Kunle E.',
    title: 'Vibe Ambassador',
    amount: '₦85,000',
    rankClass: styles.rankOther,
  },
  {
    rank: 5,
    badge: '🔥',
    name: 'Folake M.',
    title: 'Energy Champion',
    amount: '₦60,000',
    rankClass: styles.rankOther,
  },
]

const recentSprays = [
  { id: 1, user: 'Segun B.', time: 'Just now', amount: '₦20,000', emoji: '🔥' },
  { id: 2, user: 'Aunty Shade', time: '18s ago', amount: '₦50,000', emoji: '👑' },
  { id: 3, user: 'Dele & Kemi', time: '45s ago', amount: '₦15,000', emoji: '✨' },
  { id: 4, user: 'Bro Joshua', time: '2m ago', amount: '₦10,000', emoji: '💸' },
]

function LeaderboardTeaser() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const [activeTab, setActiveTab] = useState<'top' | 'feed'>('top')

  return (
    <section className="section">
      <div className="wrap">
        <div className={styles.container}>
          {/* Left Copy Column */}
          <div className={styles.copyCol}>
            <div className="sectionHead" style={{ marginBottom: 0 }}>
              <h2 className={styles.heading}>Every spray, ranked live on the big screen</h2>
              <p className={styles.subcopy}>
                The leaderboard everyone watches before they watch the cake cutting. Turn celebration
                into friendly, high-energy rivalry and crown the night’s Chief Sprayer.
              </p>
            </div>
            <ul className={styles.benefitsList}>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>Zero counting mistakes or lost cash envelopes</span>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>Instant visual alerts broadcast on DJ & event projectors</span>
              </li>
              <li className={styles.benefitItem}>
                <span className={styles.benefitIcon}>✓</span>
                <span>Celebrate openly with your name, or spray anonymously</span>
              </li>
            </ul>
          </div>

          {/* Right Live Arena Display */}
          <div
            ref={ref}
            className={`${styles.board} reveal ${isVisible ? 'revealVisible' : ''}`}
            aria-label="Live event leaderboard preview"
          >
            <div className={styles.boardHeader}>
              <div className={styles.eventInfo}>
                <span className={styles.eventName}>#TheAdeyemis2026</span>
                <span className={styles.eventHall}>Grand Ballroom • Victoria Island</span>
              </div>
              <div className={styles.liveBadge}>
                <span className={styles.liveDot} />
                <span>LIVE NOW</span>
              </div>
            </div>

            <div className={styles.totalSprayedBar}>
              <span className={styles.totalLabel}>Total Sprayed Tonight</span>
              <span className={styles.totalAmount}>₦3,420,000</span>
            </div>

            {/* View Switcher */}
            <div className={styles.tabRow}>
              <button
                type="button"
                onClick={() => setActiveTab('top')}
                className={`${styles.tabBtn} ${activeTab === 'top' ? styles.tabActive : ''}`}
              >
                Top Sprayers (Live Rank)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('feed')}
                className={`${styles.tabBtn} ${activeTab === 'feed' ? styles.tabActive : ''}`}
              >
                Recent Sprays (Ticker)
              </button>
            </div>

            {/* Tab 1: Top Sprayers */}
            {activeTab === 'top' ? (
              <div className={styles.entriesList}>
                {leaderboardData.map((entry) => (
                  <div className={styles.row} key={entry.rank}>
                    <div className={styles.userCol}>
                      <span className={`${styles.rankBadge} ${entry.rankClass}`}>
                        {entry.badge}
                      </span>
                      <div className={styles.userDetails}>
                        <span className={styles.userName}>{entry.name}</span>
                        <span className={styles.userTitle}>{entry.title}</span>
                      </div>
                    </div>
                    <span className={styles.amount}>{entry.amount}</span>
                  </div>
                ))}
              </div>
            ) : (
              /* Tab 2: Recent Sprays Feed */
              <div className={styles.feedList}>
                {recentSprays.map((item) => (
                  <div className={styles.feedItem} key={item.id}>
                    <span className={styles.feedUser}>
                      {item.emoji} {item.user}
                    </span>
                    <div className={styles.feedMeta}>
                      <span className={styles.feedAmount}>{item.amount}</span>
                      <span className={styles.feedTime}>{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeaderboardTeaser
