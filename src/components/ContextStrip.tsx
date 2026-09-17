import styles from './ContextStrip.module.css'

function ContextStrip() {
  return (
    <div className={styles.strip}>
      <div className="wrap">
        <p>
          Built for a country moving past mutilated notes —{' '}
          <strong>every spray lands clean, every naira counted.</strong>
        </p>
      </div>
    </div>
  )
}

export default ContextStrip
