import { useState } from 'react'
import naira20 from '../assets/notes/naira-20.png'
import naira50 from '../assets/notes/naira-50.png'
import naira100 from '../assets/notes/naira-100.png'
import naira200 from '../assets/notes/naira-200.png'
import naira1000 from '../assets/notes/naira-1000.png'
import styles from './SprayCardFan.module.css'

export interface DeckNote {
  amount: number
  src: string
  alt: string
  label: string
  className: string
}

// Resting fan deck notes with respective denominations
const baseDeck: DeckNote[] = [
  { amount: 20, src: naira20, alt: '₦20 note', label: '₦20', className: styles.baseNote1 },
  { amount: 50, src: naira50, alt: '₦50 note', label: '₦50', className: styles.baseNote2 },
  { amount: 100, src: naira100, alt: '₦100 note', label: '₦100', className: styles.baseNote3 },
  { amount: 200, src: naira200, alt: '₦200 note', label: '₦200', className: styles.baseNote4 },
  { amount: 1000, src: naira1000, alt: '₦1000 note', label: '₦1,000', className: styles.baseNote5 },
]

// Continuous flying spray stream: 8 notes in a looping celebration shower
const continuousStream = [
  { id: 'c1', src: naira1000, alt: '₦1000 spray note', flyClass: styles.fly1 },
  { id: 'c2', src: naira200, alt: '₦200 spray note', flyClass: styles.fly2 },
  { id: 'c3', src: naira1000, alt: '₦1000 spray note', flyClass: styles.fly3 },
  { id: 'c4', src: naira100, alt: '₦100 spray note', flyClass: styles.fly4 },
  { id: 'c5', src: naira50, alt: '₦50 spray note', flyClass: styles.fly5 },
  { id: 'c6', src: naira200, alt: '₦200 spray note', flyClass: styles.fly6 },
  { id: 'c7', src: naira1000, alt: '₦1000 spray note', flyClass: styles.fly7 },
  { id: 'c8', src: naira20, alt: '₦20 spray note', flyClass: styles.fly8 },
]

interface BurstNote {
  id: number
  src: string
  alt: string
  amountText: string
  bx: string
  by: string
  brot: string
}

function SprayCardFan() {
  const [sprayedTotal, setSprayedTotal] = useState(15000)
  const [activeNote, setActiveNote] = useState<DeckNote>(baseDeck[4]) // Default to ₦1,000
  const [burstNotes, setBurstNotes] = useState<BurstNote[]>([])

  const handleSprayNote = (note: DeckNote) => {
    // 1. Increment total sprayed by the specific note's amount (₦20, ₦50, ₦100, ₦200, or ₦1,000)
    setSprayedTotal((prev) => prev + note.amount)
    setActiveNote(note)

    // 2. Generate burst note matching the exact note tapped
    const burstId = Date.now() + Math.random()
    const randomAngle = (Math.random() * 40 - 20).toFixed(1)
    const randomX = (Math.random() * 80 - 40).toFixed(1)
    const randomY = (-220 - Math.random() * 60).toFixed(1)

    const newBurst: BurstNote = {
      id: burstId,
      src: note.src,
      alt: `${note.label} sprayed note`,
      amountText: `+${note.label}`,
      bx: `${randomX}px`,
      by: `${randomY}px`,
      brot: `${randomAngle}deg`,
    }

    setBurstNotes((prev) => [...prev.slice(-5), newBurst])

    // Cleanup after animation completes
    setTimeout(() => {
      setBurstNotes((prev) => prev.filter((n) => n.id !== burstId))
    }, 1200)
  }

  return (
    <div className={styles.fanContainer} aria-label="Interactive Naira note spray animation">
      <div className={styles.sprayCanvas}>
        <div className={styles.ambientGlow} />

        {/* Ambient celebration gold sparkles */}
        <div className={styles.sparkles} aria-hidden="true">
          <div className={`${styles.spark} ${styles.spark1}`} />
          <div className={`${styles.spark} ${styles.spark2}`} />
          <div className={`${styles.spark} ${styles.spark3}`} />
          <div className={`${styles.spark} ${styles.spark4}`} />
          <div className={`${styles.spark} ${styles.spark5}`} />
          <div className={`${styles.spark} ${styles.spark6}`} />
        </div>

        {/* Continuous outward flying spray notes */}
        <div className={styles.sprayStream} aria-hidden="true">
          {continuousStream.map((note) => (
            <div key={note.id} className={`${styles.flyingNote} ${note.flyClass}`}>
              <img
                src={note.src}
                alt={note.alt}
                className={styles.flyingNoteImg}
                loading="eager"
              />
            </div>
          ))}

          {/* Interactive burst notes spawned on user click/tap with denomination badge */}
          {burstNotes.map((note) => (
            <div
              key={note.id}
              className={styles.burstNote}
              style={
                {
                  '--bx': note.bx,
                  '--by': note.by,
                  '--brot': note.brot,
                } as React.CSSProperties
              }
            >
              <div className={styles.burstBadge}>{note.amountText}</div>
              <img src={note.src} alt={note.alt} className={styles.flyingNoteImg} />
            </div>
          ))}
        </div>

        {/* Resting base fan deck */}
        <div className={styles.baseFan} title="Click any note in the stack to spray it!">
          {baseDeck.map((note) => (
            <div
              key={note.alt}
              className={`${styles.baseNote} ${note.className}`}
              onClick={(e) => {
                e.stopPropagation()
                handleSprayNote(note)
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleSprayNote(note)
                }
              }}
              title={`Spray ${note.label}!`}
            >
              <img src={note.src} alt={note.alt} className={styles.baseNoteImg} />
            </div>
          ))}
        </div>
      </div>

      {/* Spray celebration controls & live counter */}
      <div className={styles.controls}>
        <button
          type="button"
          onClick={() => handleSprayNote(activeNote)}
          className={styles.sprayButton}
          aria-label={`Spray ${activeNote.label} cash now`}
        >
          <span>💸</span> Tap to Spray {activeNote.label}
        </button>
        <div className={styles.sprayBadge}>
          <span className={styles.pulseDot} />
          <span>₦{sprayedTotal.toLocaleString()} sprayed</span>
        </div>
      </div>
    </div>
  )
}

export default SprayCardFan
