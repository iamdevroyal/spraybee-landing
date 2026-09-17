import { useState, useEffect } from 'react'
import styles from './PartnerOnboardModal.module.css'

export type PartnerType = 'venue' | 'retail'

interface Props {
  isOpen: boolean
  initialType: PartnerType
  onClose: () => void
}

function PartnerOnboardModal({ isOpen, initialType, onClose }: Props) {
  const [partnerType, setPartnerType] = useState<PartnerType>(initialType)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Form fields
  const [businessName, setBusinessName] = useState('')
  const [contactName, setContactName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('Lagos')
  const [extraInfo, setExtraInfo] = useState('')
  const [category, setCategory] = useState('Home & Lifestyle')

  // Sync initial type when modal opens
  useEffect(() => {
    if (isOpen) {
      setPartnerType(initialType)
      setIsSubmitted(false)
    }
  }, [isOpen, initialType])

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button
          type="button"
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>Partnership Application Received!</h3>
            <p className={styles.successBody}>
              Thank you for partnering with SprayBee, <strong>{businessName || contactName}</strong>.
              Our enterprise partnership team in Lagos will review your details and reach out via
              WhatsApp / phone (<strong>{phone}</strong>) within 24 hours to finalize your setup.
            </p>
            <button type="button" onClick={onClose} className={styles.doneBtn}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <span className={styles.badge}>Partner Onboarding</span>
              <h2 className={styles.title}>
                {partnerType === 'venue'
                  ? 'Onboard Your Event Venue'
                  : 'Onboard Your Retail / Brand Store'}
              </h2>
              <p className={styles.subtitle}>
                {partnerType === 'venue'
                  ? 'Connect your screens to the live spray leaderboard and earn commission on every event.'
                  : 'List your luxury goods, electronics, and registry items for event guests to gift directly.'}
              </p>
            </div>

            {/* Track Switcher */}
            <div className={styles.trackSwitch}>
              <button
                type="button"
                className={`${styles.trackBtn} ${partnerType === 'venue' ? styles.trackActive : ''}`}
                onClick={() => setPartnerType('venue')}
              >
                🏛️ Event Center / Venue
              </button>
              <button
                type="button"
                className={`${styles.trackBtn} ${partnerType === 'retail' ? styles.trackActive : ''}`}
                onClick={() => setPartnerType('retail')}
              >
                🛍️ Retail Store / Brand
              </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>
                    {partnerType === 'venue' ? 'Venue / Hall Name *' : 'Store / Business Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder={
                      partnerType === 'venue' ? 'e.g. Landmark Centre' : 'e.g. Medplus / Hubmart'
                    }
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Contact Person *</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Tolu Balogun"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08012345678"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@business.com"
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Operating City *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={styles.select}
                  >
                    <option value="Lagos">Lagos State</option>
                    <option value="Abuja">Abuja (FCT)</option>
                    <option value="Port Harcourt">Port Harcourt (Rivers)</option>
                    <option value="Ibadan">Ibadan (Oyo)</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Benin City">Benin City (Edo)</option>
                    <option value="Other">Other States</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>
                    {partnerType === 'venue' ? 'Display / Screen Type' : 'Product Category'}
                  </label>
                  {partnerType === 'venue' ? (
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={styles.select}
                    >
                      <option value="LED Video Wall">LED Video Wall</option>
                      <option value="Projectors & Screens">Projectors & Screens</option>
                      <option value="Multiple TV Displays">Multiple TV Displays</option>
                      <option value="Planning New Screen Setup">Planning New Screen Setup</option>
                    </select>
                  ) : (
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={styles.select}
                    >
                      <option value="Home & Kitchen Appliances">Home & Kitchen Appliances</option>
                      <option value="Luxury & Perfumes">Luxury & Perfumes</option>
                      <option value="Consumer Electronics">Consumer Electronics</option>
                      <option value="Hampers & Gourmet Gifts">Hampers & Gourmet Gifts</option>
                      <option value="Fashion & Jewelry">Fashion & Jewelry</option>
                      <option value="Experiences & Vouchers">Experiences & Vouchers</option>
                    </select>
                  )}
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  {partnerType === 'venue'
                    ? 'Venue Capacity & Screen Location Details (Optional)'
                    : 'Store Website / Instagram Handle (Optional)'}
                </label>
                <textarea
                  value={extraInfo}
                  onChange={(e) => setExtraInfo(e.target.value)}
                  placeholder={
                    partnerType === 'venue'
                      ? 'e.g. 500-guest banquet hall with 3 central LED screens'
                      : 'e.g. @yourstoreng or www.yourstore.com'
                  }
                  className={styles.textarea}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                {isSubmitting ? 'Submitting Application...' : 'Submit Partnership Application →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default PartnerOnboardModal
