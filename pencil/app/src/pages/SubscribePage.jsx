import { useMemo, useState } from 'react'
import Button from '../components/Button.jsx'
import Input from '../components/Input.jsx'

function isValidEmail(value) {
  // Lightweight “good enough” check for UI validation.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [submittedEmail, setSubmittedEmail] = useState(null)
  const [touched, setTouched] = useState(false)

  const validation = useMemo(() => {
    if (!touched) return { status: 'default', message: undefined, canSubmit: false }
    if (!email.trim())
      return { status: 'error', message: 'Inserisci la tua email', canSubmit: false }
    if (!isValidEmail(email.trim()))
      return { status: 'error', message: 'Email non valida', canSubmit: false }
    return { status: 'success', message: 'Ok!', canSubmit: true }
  }, [email, touched])

  function onSubmit(e) {
    e.preventDefault()
    setTouched(true)
    if (!validation.canSubmit) return
    setSubmittedEmail(email.trim())
  }

  return (
    <div className="subscribe">
      <div className="subscribe__backdrop" aria-hidden="true" />

      <section className="subscribe__modal" aria-label="Iscrizione newsletter">
        <div className="subscribe__logo" aria-hidden="true">
          <span className="subscribe__logoMark" />
          <span className="subscribe__logoText">pencil</span>
        </div>

        <div className="subscribe__copy">
          <h1 className="subscribe__title">Iscriviti alla Newsletter</h1>
          <p className="subscribe__subtitle">
            Iscriviti alla newsletter per non perderti le ultime novità.
          </p>
        </div>

        {submittedEmail ? (
          <div className="subscribe__success" role="status">
            <p className="subscribe__successTitle">Iscrizione completata</p>
            <p className="subscribe__successBody">
              Ti abbiamo iscritto con <strong>{submittedEmail}</strong>.
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setSubmittedEmail(null)
                setEmail('')
                setTouched(false)
              }}
            >
              Iscrivi un’altra email
            </Button>
          </div>
        ) : (
          <form className="subscribe__form" onSubmit={onSubmit}>
            <div className="subscribe__row">
              <Input
                label="Email"
                status={validation.status}
                message={validation.message}
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                inputMode="email"
                autoComplete="email"
              />
              <Button type="submit" disabled={!validation.canSubmit}>
                Iscriviti
              </Button>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}

