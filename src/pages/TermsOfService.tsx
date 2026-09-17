import { navigateTo } from '../router'
import Footer from '../components/Footer'
import styles from './LegalPage.module.css'

function TermsOfService() {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigateTo('/')
  }

  return (
    <div className={styles.page}>
      {/* Sticky Header Nav */}
      <header className={styles.topBar}>
        <div className={`wrap ${styles.topBarInner}`}>
          <a href="/" onClick={handleHomeClick} className={styles.brandLink}>
            SprayBee
          </a>
          <button type="button" onClick={handleHomeClick} className={styles.backBtn}>
            <span>←</span> Back to Home
          </button>
        </div>
      </header>

      {/* Page Header */}
      <section className={styles.headerSection}>
        <div className="wrap">
          <div className={styles.badgeRow}>
            <span className={styles.categoryBadge}>Terms of Service</span>
            <span className={styles.versionBadge}>
              Last Updated: September 2026 • Version 2.4 (CBN & Legal Compliant)
            </span>
          </div>
          <h1 className={styles.pageTitle}>SprayBee Terms of Service</h1>
          <p className={styles.pageSubtitle}>
            These legally binding terms govern your access to and use of the SprayBee platform,
            digital celebration spraying, gift registry services, and instant bank settlements across
            Nigeria.
          </p>

          <div className={styles.summaryBox}>
            <div className={styles.summaryTitle}>In Plain English: The Core Agreement</div>
            <p className={styles.summaryText}>
              SprayBee lets you celebrate Nigerian traditions without the headache of physical cash,
              counterfeits, or mutilation penalties. When you spray cash or purchase gifts, funds are
              charged immediately and transferred securely to the celebrant. Sprays are final and
              cannot be recalled once celebrated. Celebrants can withdraw 100% of their sprayed cash to
              their bank account or choose between delivery and cash conversion for gifts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky TOC */}
      <div className="wrap">
        <div className={styles.contentWrap}>
          {/* Table of Contents Sidebar */}
          <aside className={styles.tocSidebar} aria-label="Table of contents">
            <div className={styles.tocTitle}>Contents</div>
            <ul className={styles.tocList}>
              <li>
                <a href="#acceptance" className={styles.tocLink}>
                  1. Acceptance & Eligibility
                </a>
              </li>
              <li>
                <a href="#services" className={styles.tocLink}>
                  2. Description of Services
                </a>
              </li>
              <li>
                <a href="#clean-note" className={styles.tocLink}>
                  3. Clean Note & Legal Compliance
                </a>
              </li>
              <li>
                <a href="#wallets" className={styles.tocLink}>
                  4. Wallets, Top-Ups & Irrevocability
                </a>
              </li>
              <li>
                <a href="#cashout" className={styles.tocLink}>
                  5. Celebrant Cash-Outs & Settlement
                </a>
              </li>
              <li>
                <a href="#gift-mode" className={styles.tocLink}>
                  6. Gifting Terms & Cash Conversion
                </a>
              </li>
              <li>
                <a href="#leaderboard-rules" className={styles.tocLink}>
                  7. Leaderboard & Conduct Rules
                </a>
              </li>
              <li>
                <a href="#fees" className={styles.tocLink}>
                  8. Transparent Fee Structure
                </a>
              </li>
              <li>
                <a href="#ip" className={styles.tocLink}>
                  9. Intellectual Property
                </a>
              </li>
              <li>
                <a href="#liability" className={styles.tocLink}>
                  10. Disclaimers & Liability Limits
                </a>
              </li>
              <li>
                <a href="#governing-law" className={styles.tocLink}>
                  11. Dispute Resolution & Arbitration
                </a>
              </li>
              <li>
                <a href="#contact-legal" className={styles.tocLink}>
                  12. Legal Inquiries & Contact
                </a>
              </li>
            </ul>
          </aside>

          {/* Legal Clauses Body */}
          <main className={styles.legalBody}>
            {/* Section 1 */}
            <section id="acceptance" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>1. Acceptance & Eligibility</h2>
              <p className={styles.paragraph}>
                By accessing or using the SprayBee web application, mobile interfaces, or event QR
                check-ins, you confirm that you have read, understood, and agreed to be bound by these
                Terms of Service and our Privacy Policy.
              </p>
              <p className={styles.paragraph}>
                You must be at least 18 years of age and possess the legal capacity to enter into
                binding contracts in the Federal Republic of Nigeria (or your jurisdiction of
                residence if participating from abroad).
              </p>
            </section>

            {/* Section 2 */}
            <section id="services" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>2. Description of Services</h2>
              <p className={styles.paragraph}>
                SprayBee operates a digital platform facilitating real-time social celebration gifting
                and spraying at weddings, birthdays, naming ceremonies, anniversaries, graduations, and
                public gatherings. Services include:
              </p>
              <ul className={styles.legalList}>
                <li>Instant QR code event entry and event wallet provisioning;</li>
                <li>Digital Naira swipe spraying with real-time on-screen projection visual sync;</li>
                <li>Curated gift registry browsing and purchase fulfillment;</li>
                <li>Real-time event leaderboards and celebration badges;</li>
                <li>Direct automated settlement into celebrants’ verified Nigerian bank accounts.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="clean-note" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>
                3. Clean Note Policy & Statutory Currency Compliance
              </h2>
              <div className={styles.alertBox}>
                <div className={styles.alertBoxTitle}>Protecting Cultural Heritage Legally</div>
                Under Section 21 of the Central Bank of Nigeria (CBN) Act 2007, tampering with, stepping
                on, writing on, or spraying physical Naira banknotes constitutes an offence punishable
                by law.
              </div>
              <p className={styles.paragraph}>
                SprayBee provides a lawful, modern alternative that preserves the beloved tradition of
                celebration gifting while strictly avoiding physical currency mutilation, soiled notes,
                currency trading, or counterfeit circulation.
              </p>
            </section>

            {/* Section 4 */}
            <section id="wallets" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>
                4. Wallets, Top-Ups & Irrevocability of Sprays
              </h2>
              <p className={styles.paragraph}>
                Users fund their SprayBee event balance using secure Nigerian payment methods (cards,
                bank transfers, USSD, or direct debits). All top-ups are held safely in escrow with
                CBN-licensed payment switches.
              </p>
              <p className={styles.paragraph}>
                <strong>Irrevocability:</strong> When you spray digital Naira or send a gift at an event,
                the transaction is instant and final. Just like throwing cash on an Owambe dance floor,
                sprayed funds transfer ownership immediately to the celebrant and cannot be reversed,
                cancelled, or recalled.
              </p>
              <p className={styles.paragraph}>
                Any un-sprayed wallet balance remaining after an event may be refunded to the user's
                original funding source upon request through the account dashboard.
              </p>
            </section>

            {/* Section 5 */}
            <section id="cashout" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>
                5. Celebrant Cash-Outs & Bank Settlement SLAs
              </h2>
              <p className={styles.paragraph}>
                Celebrants may initiate withdrawals of sprayed funds to any verified commercial bank
                account in Nigeria.
              </p>
              <ul className={styles.legalList}>
                <li>
                  <strong>Verification:</strong> The destination bank account must match the legal name
                  and identity documents of the verified celebrant to comply with CBN Anti-Money
                  Laundering (AML) standards;
                </li>
                <li>
                  <strong>Settlement Timelines:</strong> Automated withdrawals are processed via NIP
                  (NIBSS Instant Payments) within 60 seconds of request during standard banking hours;
                </li>
                <li>
                  <strong>Daily Limits:</strong> Standard KYC tiers apply in conformity with CBN
                  transaction limit guidelines.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="gift-mode" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>
                6. Gifting Terms & Celebrant Cash Conversion Option
              </h2>
              <p className={styles.paragraph}>
                When a guest sends a gift from a partner store or curated wishlist:
              </p>
              <ul className={styles.legalList}>
                <li>
                  <strong>Item Redemption:</strong> The celebrant can accept the gift, triggering
                  doorstep logistics delivery to their verified Nigerian address;
                </li>
                <li>
                  <strong>Cash Conversion:</strong> Celebrants possess full autonomy to convert 100% of
                  the monetary purchase value of the gift into liquid cash transferred directly to their
                  bank account;
                </li>
                <li>
                  <strong>Partner Quality:</strong> All registry items are sourced from vetted Nigerian
                  retail partners with manufacturer warranties where applicable.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="leaderboard-rules" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>7. Leaderboard & Code of Conduct</h2>
              <p className={styles.paragraph}>Users agree to celebrate respectfully. You shall not:</p>
              <ul className={styles.legalList}>
                <li>Use profane, defamatory, or abusive screen names or spray messages;</li>
                <li>Attempt to manipulate event spray counts using bots, scripts, or chargebacks;</li>
                <li>Impersonate other guests or celebrants;</li>
                <li>Use SprayBee for money laundering, pyramid schemes, or unauthorized lotteries.</li>
              </ul>
              <p className={styles.paragraph}>
                Event hosts and SprayBee administrators reserve the right to moderate leaderboards and
                disqualify bad actors from public projection screens.
              </p>
            </section>

            {/* Section 8 */}
            <section id="fees" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>8. Transparent Fee Structure</h2>
              <p className={styles.paragraph}>
                SprayBee maintains total transparency. Processing fees, event screen integration fees,
                or gateway charges are clearly displayed before confirming wallet top-ups. There are no
                hidden maintenance charges, surprise membership dues, or post-event deductions.
              </p>
            </section>

            {/* Section 9 */}
            <section id="ip" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>9. Intellectual Property</h2>
              <p className={styles.paragraph}>
                The SprayBee brand name, logos, visual fanning designs, software code, and interface
                mechanics are protected under copyright, trademark, and intellectual property laws of
                Nigeria and international treaties. You may not copy, reverse-engineer, or commercially
                exploit any portion without our prior written consent.
              </p>
            </section>

            {/* Section 10 */}
            <section id="liability" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>10. Disclaimers & Limitation of Liability</h2>
              <p className={styles.paragraph}>
                SprayBee provides its platform on an "as is" and "as available" basis. While we
                maintain high-availability infrastructure with redundancy, we are not liable for delays
                arising from telecom network downtime, bank switching interruptions, or third-party
                logistics delays outside our direct control.
              </p>
              <p className={styles.paragraph}>
                In all circumstances, our maximum aggregate liability to any user is limited to the
                total service fees earned by SprayBee on that user’s transactions during the specific
                event in dispute.
              </p>
            </section>

            {/* Section 11 */}
            <section id="governing-law" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>11. Dispute Resolution & Governing Law</h2>
              <p className={styles.paragraph}>
                These Terms shall be governed by and construed in accordance with the laws of the
                Federal Republic of Nigeria.
              </p>
              <p className={styles.paragraph}>
                Any dispute arising out of or in connection with these Terms shall first be submitted to
                good-faith mediation. If unresolved within 30 days, it shall be settled by binding
                arbitration in Lagos State, Nigeria, conducted in accordance with the Arbitration and
                Mediation Act 2023.
              </p>
            </section>

            {/* Section 12 */}
            <section id="contact-legal" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>12. Legal Inquiries & Contact</h2>
              <div className={styles.contactCard}>
                <div className={styles.contactCardTitle}>Official Legal Notices</div>
                <p className={styles.paragraph}>
                  For regulatory notices, law enforcement inquiries, or formal legal correspondence:
                </p>
                <ul className={styles.legalList} style={{ marginTop: '12px' }}>
                  <li>
                    <strong>Legal Affairs:</strong>{' '}
                    <a href="mailto:legal@spraybee.app" style={{ color: 'var(--color-green)' }}>
                      legal@spraybee.app
                    </a>
                  </li>
                  <li>
                    <strong>General Support:</strong>{' '}
                    <a href="mailto:hello@spraybee.app" style={{ color: 'var(--color-green)' }}>
                      hello@spraybee.app
                    </a>
                  </li>
                  <li>
                    <strong>Corporate Address:</strong> SprayBee Technologies Limited, Victoria Island,
                    Lagos, Nigeria.
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TermsOfService
