import { useMemo, useState } from 'react'
import logoSlungUrl from '../../assets/logo-slung.svg'
import logoVersionLightUrl from '../../assets/logo-version-light.png'
import bgImageUrl from '../../assets/modale-subscribe-bg.png'
import Button from '../../components/Button/Button.jsx'
import Input from '../../components/Input/Input.jsx'
import './SubscribePage.css'

function Logo() {
  return (
    <div className="cc-subscribePage__logo" aria-hidden="true">
      <img className="cc-subscribePage__logoBase" alt="" src={logoVersionLightUrl} />
      <img className="cc-subscribePage__logoMark" alt="" src={logoSlungUrl} />
    </div>
  )
}

export default function SubscribePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState()
  const [helperText, setHelperText] = useState()

  const inputStatus = useMemo(() => {
    if (status === 'error') return 'error'
    if (status === 'success') return 'success'
    return undefined
  }, [status])

  function onSubmit(e) {
    e.preventDefault()
    const trimmed = email.trim()
    const isValid = /^\S+@\S+\.\S+$/.test(trimmed)

    if (!trimmed || !isValid) {
      setStatus('error')
      setHelperText('Inserisci una email valida.')
      return
    }

    setStatus('success')
    setHelperText('Iscrizione completata!')
  }

  return (
    <main className="cc-subscribePage" style={{ '--cc-subscribe-bg': `url(${bgImageUrl})` }}>
      <div className="cc-subscribePage__backdrop" />

      <form className="cc-subscribePage__modal" onSubmit={onSubmit}>
        <Logo />

        <div className="cc-subscribePage__copy">
          <div className="cc-subscribePage__title">Iscriviti alla Newsletter</div>
          <div className="cc-subscribePage__subtitle">
            Iscriviti alla newsletter per non perderti le ultime novità.
          </div>
        </div>

        <div className="cc-subscribePage__formRow">
          <Input
            label="Email"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus(undefined)
              setHelperText(undefined)
            }}
            status={inputStatus}
            helperText={helperText}
          />

          <Button className="cc-subscribePage__cta" variant="primary" type="submit">
            Iscriviti
          </Button>
        </div>
      </form>
    </main>
  )
}
