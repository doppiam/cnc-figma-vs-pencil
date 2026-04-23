import './Input.css'

export default function Input({
  label = 'Input title',
  status = 'default', // default | filled | disabled | error | success
  message,
  className = '',
  disabled: disabledProp,
  ...props
}) {
  const disabled = disabledProp ?? status === 'disabled'
  const rootClasses = ['ds-input', `ds-input--${status}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={rootClasses}>
      <span className="ds-input__label">{label}</span>
      <span className="ds-input__field">
        <input className="ds-input__control" disabled={disabled} {...props} />
      </span>
      {status === 'error' && message ? (
        <span className="ds-input__message ds-input__message--error">
          {message}
        </span>
      ) : null}
      {status === 'success' && message ? (
        <span className="ds-input__message ds-input__message--success">
          {message}
        </span>
      ) : null}
    </label>
  )
}

