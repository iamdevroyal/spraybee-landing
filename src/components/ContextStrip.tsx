import styles from './ContextStrip.module.css'

function ContextStrip() {
  return (
    <div className={styles.strip}>
      <div className="wrap">
        <p>
          Built for a country moving past mutilated notes —{' '}
          <strong>and for friends and family in the diaspora who wants in on the vibes too.</strong>
        </p>
      </div>
    </div>
  )
}

export default ContextStrip
