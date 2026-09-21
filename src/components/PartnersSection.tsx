import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import PartnerOnboardModal, { PartnerType } from './PartnerOnboardModal'
import styles from './PartnersSection.module.css'

interface PartnerTrack {
  type: PartnerType
  icon: string
  badge: string
  title: string
  description: string
  perks: string[]
  btnText: string
  cardClass: string
  badgeClass: string
  btnClass: string
}

const partnerTracks: PartnerTrack[] = [
  {
    type: 'venue',
    icon: '🏛️',
    badge: 'Event Venue Partnership',
    title: 'Transform Your Screens Into High-Energy Live Arenas',
    description:
      'Put the live spray feed and real-time leaderboards on your LED walls, TV screens, and projectors. Guests scan a QR code at their table to join instantly, turning every banquet hall into an electric owambe spectacle.',
    perks: [
      'Plug-and-play browser or HDMI projection sync — zero extra hardware needed',
      'Earn exclusive partner revenue-share on every spray event hosted at your hall',
      'Keep celebrants and guests dancing longer with automated visual leaderboards',
    ],
    btnText: 'Onboard as Event Center',
    cardClass: styles.cardVenue,
    badgeClass: styles.badgeVenue,
    btnClass: styles.actionBtnVenue,
  },
  {
    type: 'retail',
    icon: '🛍️',
    badge: 'Retail & Gift Stores',
    title: 'Place Your Products Directly on Nigerian Wishlists',
    description:
      'Feature your luxury goods, electronics, perfumes, home appliances, and gift hampers inside the SprayBee Gift Vault. Guests purchase directly from your verified catalog for couples and birthday celebrants across Nigeria.',
    perks: [
      'Access thousands of high-intent event gifters ready to spend on real keepsakes',
      'Guaranteed direct merchant payouts the moment items are gifted or redeemed',
      'Seamless white-glove logistics integration for swift doorstep deliveries',
    ],
    btnText: 'Onboard as Retail Partner',
    cardClass: styles.cardRetail,
    badgeClass: styles.badgeRetail,
    btnClass: styles.actionBtnRetail,
  },
]

function PartnersSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedType, setSelectedType] = useState<PartnerType>('venue')

  const handleOpenModal = (type: PartnerType) => {
    setSelectedType(type)
    setModalOpen(true)
  }

  return (
    <section className="section section--paper" id="partners">
      <div className="wrap">
        <div className="sectionHead">
          <h2>Built for the whole party</h2>
          <p>
            Whether you run a premier event center or manage a top retail brand, SprayBee helps you
            monetize and power modern celebrations.
          </p>
        </div>
        <div ref={ref} className={`${styles.grid} reveal ${isVisible ? 'revealVisible' : ''}`}>
          {partnerTracks.map((partner) => (
            <div className={`${styles.card} ${partner.cardClass}`} key={partner.title}>
              <div>
                <div className={styles.cardHeader}>
                  <span className={`${styles.badge} ${partner.badgeClass}`}>{partner.badge}</span>
                </div>
                <h3 className={styles.title}>{partner.title}</h3>
                <p className={styles.body}>{partner.description}</p>
                <ul className={styles.perksList}>
                  {partner.perks.map((perk) => (
                    <li className={styles.perkItem} key={perk}>
                      <span className={styles.perkIcon}>✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => handleOpenModal(partner.type)}
                className={`${styles.actionBtn} ${partner.btnClass}`}
              >
                {partner.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Onboarding Modal */}
      <PartnerOnboardModal
        isOpen={modalOpen}
        initialType={selectedType}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}

export default PartnersSection
