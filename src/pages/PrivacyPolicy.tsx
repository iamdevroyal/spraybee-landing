import { navigateTo } from '../router'
import Footer from '../components/Footer'
import styles from './LegalPage.module.css'

function PrivacyPolicy() {
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
            <span className={styles.categoryBadge}>Legal & Compliance</span>
            <span className={styles.versionBadge}>
              Last Updated: September 2026 • Version 2.1 (NDPA Compliant)
            </span>
          </div>
          <h1 className={styles.pageTitle}>SprayBee Privacy Policy</h1>
          <p className={styles.pageSubtitle}>
            How SprayBee Financial Technologies collects, protects, uses, and respects your personal
            data when you spray cash, send gifts, and celebrate with us across Nigeria.
          </p>

          <div className={styles.summaryBox}>
            <div className={styles.summaryTitle}>In Plain English: What You Need to Know</div>
            <p className={styles.summaryText}>
              We only collect the data necessary to let you join celebration events, spray cash, send
              gifts, and settle payouts safely. We do not sell your personal data to advertisers. You
              have the right at any time to spray anonymously on event screens, view your transaction
              history, and request deletion of your information in compliance with the Nigeria Data
              Protection Act (NDPA) 2023.
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
                <a href="#intro" className={styles.tocLink}>
                  1. Introduction & Who We Are
                </a>
              </li>
              <li>
                <a href="#compliance" className={styles.tocLink}>
                  2. Regulatory Framework
                </a>
              </li>
              <li>
                <a href="#data-collected" className={styles.tocLink}>
                  3. Information We Collect
                </a>
              </li>
              <li>
                <a href="#how-we-use" className={styles.tocLink}>
                  4. How We Use Your Data
                </a>
              </li>
              <li>
                <a href="#leaderboard-privacy" className={styles.tocLink}>
                  5. Leaderboard & Event Privacy
                </a>
              </li>
              <li>
                <a href="#payment-security" className={styles.tocLink}>
                  6. Payment & Banking Security
                </a>
              </li>
              <li>
                <a href="#data-sharing" className={styles.tocLink}>
                  7. Third-Party Data Sharing
                </a>
              </li>
              <li>
                <a href="#retention" className={styles.tocLink}>
                  8. Data Retention & Deletion
                </a>
              </li>
              <li>
                <a href="#user-rights" className={styles.tocLink}>
                  9. Your Data Rights under NDPA
                </a>
              </li>
              <li>
                <a href="#cookies" className={styles.tocLink}>
                  10. Cookies & Tracking
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.tocLink}>
                  11. Contact Our DPO
                </a>
              </li>
            </ul>
          </aside>

          {/* Legal Clauses Body */}
          <main className={styles.legalBody}>
            {/* Section 1 */}
            <section id="intro" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>1. Introduction & Who We Are</h2>
              <p className={styles.paragraph}>
                Welcome to SprayBee ("SprayBee", "we", "us", or "our"), operated by SprayBee
                Technologies Limited, a technology company incorporated in the Federal Republic of
                Nigeria.
              </p>
              <p className={styles.paragraph}>
                SprayBee provides a digital celebration platform allowing guests at Nigerian social
                events (such as weddings, birthdays, anniversaries, and community gatherings) to spray
                digital Naira, send curated gifts from partner registries, view live celebration
                leaderboards, and enable celebrants to withdraw funds directly into their Nigerian bank
                accounts without physical cash handling or currency mutilation.
              </p>
            </section>

            {/* Section 2 */}
            <section id="compliance" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>2. Regulatory Framework & Lawful Basis</h2>
              <p className={styles.paragraph}>
                We process your personal information strictly in accordance with applicable Nigerian
                laws, including:
              </p>
              <ul className={styles.legalList}>
                <li>
                  <strong>The Nigeria Data Protection Act (NDPA) 2023</strong> and the Nigeria Data
                  Protection Regulation (NDPR);
                </li>
                <li>
                  <strong>Central Bank of Nigeria (CBN) Regulations</strong> regarding electronic
                  payments, consumer protection, and Know-Your-Customer (KYC) compliance;
                </li>
                <li>
                  <strong>Cybercrimes (Prohibition, Prevention, etc.) Act 2015</strong> for the
                  protection of critical digital financial infrastructure.
                </li>
              </ul>
              <p className={styles.paragraph}>
                Our lawful bases for processing include contract performance (facilitating your sprays
                and gifts), legitimate business interests (fraud monitoring, system stability), legal
                compliance (financial reporting and anti-money laundering regulations), and your
                explicit consent.
              </p>
            </section>

            {/* Section 3 */}
            <section id="data-collected" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>3. Information We Collect</h2>
              <p className={styles.paragraph}>
                We collect information directly from you when you interact with our platform:
              </p>
              <ul className={styles.legalList}>
                <li>
                  <strong>Identity and Contact Data:</strong> Mobile phone number, full name or alias,
                  email address (optional for receipts), and profile display preferences.
                </li>
                <li>
                  <strong>Celebrant & Cash-out Data:</strong> Verified Bank Verification Number (BVN) or
                  National Identity Number (NIN) hash (only where required for tier cash-out limits by
                  CBN guidelines), Nigerian bank account number, account holder name, and settlement
                  records.
                </li>
                <li>
                  <strong>Transaction & Spray Records:</strong> Event codes attended, denomination and
                  quantities of notes sprayed, gift items purchased, timestamps, payment reference
                  numbers, and redemption choices (physical delivery vs. cash conversion).
                </li>
                <li>
                  <strong>Technical & Device Data:</strong> IP address, device model, operating system,
                  browser type, and session timestamps used for fraud prevention and geo-location
                  accuracy.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="how-we-use" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>4. How We Use Your Data</h2>
              <p className={styles.paragraph}>Your information is utilized solely for:</p>
              <ul className={styles.legalList}>
                <li>Enabling instant QR code event entry without cumbersome app downloads;</li>
                <li>
                  Processing payment transactions and routing digital spray funds to the celebrant’s
                  designated wallet;
                </li>
                <li>
                  Broadcasting real-time celebration leaderboards and screen alerts at the specific
                  event you attend;
                </li>
                <li>
                  Fulfilling physical gift delivery orders with certified retail and logistics
                  partners;
                </li>
                <li>Detecting and preventing payment fraud, chargeback abuse, and unauthorized access;</li>
                <li>Providing customer assistance and transaction dispute reconciliation.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="leaderboard-privacy" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>5. Leaderboard & Event Screen Privacy</h2>
              <div className={styles.alertBox}>
                <div className={styles.alertBoxTitle}>Your Right to Party Anonymously</div>
                When spraying at an event, you can choose how your name appears on the live venue
                screens and mobile leaderboards:
              </div>
              <ul className={styles.legalList}>
                <li>
                  <strong>Public Name:</strong> Displays your chosen name (e.g., "Tunde O." or "Chief
                  Ade").
                </li>
                <li>
                  <strong>Anonymous Mode:</strong> Displays an Owambe avatar and label (e.g., "A Secret
                  Baller" or "Well Wisher") while maintaining financial integrity behind the scenes.
                </li>
              </ul>
              <p className={styles.paragraph}>
                The celebrant always receives a private itemized financial ledger for audit and
                thank-you acknowledgement purposes.
              </p>
            </section>

            {/* Section 6 */}
            <section id="payment-security" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>6. Payment & Banking Security</h2>
              <p className={styles.paragraph}>
                SprayBee does not store full credit/debit card numbers or bank card PINs on our servers.
                All monetary transfers and card collections are handled by CBN-licensed payment
                switches and switching networks compliant with <strong>PCI-DSS Level 1</strong>.
              </p>
              <p className={styles.paragraph}>
                All communication between your device and SprayBee services is encrypted end-to-end
                utilizing <strong>Transport Layer Security (TLS 1.3)</strong>, and data at rest is
                safeguarded with AES-256 encryption.
              </p>
            </section>

            {/* Section 7 */}
            <section id="data-sharing" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>7. Third-Party Data Sharing</h2>
              <p className={styles.paragraph}>
                We never sell, rent, or trade your personal data. We share data only with:
              </p>
              <ul className={styles.legalList}>
                <li>
                  <strong>Payment Gateways & Switching Partners:</strong> CBN-licensed institutions to
                  process wallet top-ups and bank disbursements;
                </li>
                <li>
                  <strong>Gift Merchants & Logistics Couriers:</strong> Delivery address and recipient
                  phone numbers exclusively to deliver physical registry items chosen by the
                  celebrant;
                </li>
                <li>
                  <strong>Law Enforcement & Regulators:</strong> Only where mandated under Nigerian
                  statutory warrants or lawful subpoenas.
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="retention" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>8. Data Retention & Deletion</h2>
              <p className={styles.paragraph}>
                We retain transaction logs for the minimum period required by Nigerian financial
                statutes (ordinarily 5 to 7 years for financial and taxation reporting compliance).
                Session telemetry and non-financial event logs are permanently deleted or anonymized
                within 90 days following event closure.
              </p>
            </section>

            {/* Section 9 */}
            <section id="user-rights" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>9. Your Data Rights under NDPA 2023</h2>
              <p className={styles.paragraph}>Under Nigerian data protection law, you hold the right to:</p>
              <ul className={styles.legalList}>
                <li>Request access to the personal data we hold about you;</li>
                <li>Request correction of inaccurate or incomplete information;</li>
                <li>Request the erasure of your personal data where statutory grounds permit;</li>
                <li>Withdraw consent for marketing communications or optional event visibility;</li>
                <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="cookies" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>10. Cookies & Tracking Technologies</h2>
              <p className={styles.paragraph}>
                We use essential cookies and local storage tokens strictly to keep you authenticated in
                your active event session, maintain your wallet balance state, and prevent CSRF
                attacks. We do not deploy third-party advertising tracking pixels or cross-site
                ad-tracking cookies.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>11. Contact Our Data Protection Officer (DPO)</h2>
              <div className={styles.contactCard}>
                <div className={styles.contactCardTitle}>Questions or Privacy Requests?</div>
                <p className={styles.paragraph}>
                  For all inquiries, subject access requests, or regulatory clarifications, please
                  reach out to our dedicated Data Protection team:
                </p>
                <ul className={styles.legalList} style={{ marginTop: '12px' }}>
                  <li>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:privacy@spraybee.app" style={{ color: 'var(--color-green)' }}>
                      privacy@spraybee.app
                    </a>
                  </li>
                  <li>
                    <strong>Data Protection Officer:</strong>{' '}
                    <a href="mailto:dpo@spraybee.app" style={{ color: 'var(--color-green)' }}>
                      dpo@spraybee.app
                    </a>
                  </li>
                  <li>
                    <strong>Registered Address:</strong> SprayBee Technologies Limited, Victoria Island,
                    Lagos State, Nigeria.
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

export default PrivacyPolicy
