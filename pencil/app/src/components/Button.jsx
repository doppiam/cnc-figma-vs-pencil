import './Button.css'

export default function Button({
  variant = 'primary',
  disabled = false,
  className = '',
  children,
  ...props
}) {
  const classes = ['ds-button', `ds-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

