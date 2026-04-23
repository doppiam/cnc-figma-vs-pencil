import './Button.css'

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}) {
  return (
    <button
      className={[
        'cc-button',
        variant === 'secondary' ? 'cc-button--secondary' : 'cc-button--primary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

