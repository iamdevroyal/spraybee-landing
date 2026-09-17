import { useState, type FormEvent } from 'react'
import styles from './WaitlistForm.module.css'

interface WaitlistFormProps {
  variant?: 'light' | 'dark'
}

/**
 * Captures an email address for the pre-launch waitlist.
 *
 * NOTE: this currently only manages local UI state (submitting -> success).
 * Wire the `handleSubmit` function below to `POST /api/v1/waitlist` (or
 * equivalent) once that endpoint exists on the backend.
 */
function WaitlistForm({ variant = 'light' }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return

    setStatus('submitting')
    try {
      // TODO: replace with a real request once the waitlist endpoint exists, e.g.
      // await fetch('/api/v1/waitlist', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // })
      await new Promise((resolve) => setTimeout(resolve, 500))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p
        className={`${styles.successMessage} ${variant === 'dark' ? styles.successMessageDark : ''}`}
      >
        You're on the list — we'll email you the moment SprayBee is live.
      </p>
    )
  }

  return (
    <form
      className={`${styles.form} ${variant === 'dark' ? styles.formDark : ''}`}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={styles.input}
        aria-label="Email address"
      />
      <button type="submit" className={styles.button} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Notify me'}
      </button>
      {status === 'error' && (
        <p className={styles.errorMessage}>Something went wrong — try again in a moment.</p>
      )}
    </form>
  )
}

export default WaitlistForm
