import { useId, useMemo, useState } from 'react'
import './Input.css'

function deriveState({ state, disabled, focused, value, status }) {
  if (state) return state
  if (disabled) return 'disabled'
  if (status === 'error') return 'error'
  if (status === 'success') return 'success'
  if (focused) return 'focus'
  if (value) return 'filled'
  return 'default'
}

export default function Input({
  label = 'Input title',
  placeholder = 'Input text',
  helperText,
  status, // 'error' | 'success' | undefined
  state, // 'default' | 'focus' | 'filled' | 'disabled' | 'error' | 'success'
  value,
  defaultValue,
  disabled,
  onChange,
  className,
  ...props
}) {
  const id = useId()
  const [focused, setFocused] = useState(false)

  const computedState = useMemo(
    () =>
      deriveState({
        state,
        disabled,
        focused,
        value: value ?? defaultValue,
        status,
      }),
    [state, disabled, focused, value, defaultValue, status]
  )

  const showHelper = computedState === 'error' || computedState === 'success'

  return (
    <div
      className={[
        'cc-input',
        `cc-input--${computedState}`,
        disabled ? 'cc-input--disabled' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="cc-input__labelRow">
        <label className="cc-input__label" htmlFor={id}>
          {label}
        </label>
      </div>

      <input
        className="cc-input__field"
        id={id}
        placeholder={placeholder}
        disabled={disabled || computedState === 'disabled'}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={(e) => {
          setFocused(true)
          props.onFocus?.(e)
        }}
        onBlur={(e) => {
          setFocused(false)
          props.onBlur?.(e)
        }}
        {...props}
      />

      {showHelper && (
        <div className="cc-input__helperRow">
          <div className="cc-input__helper">
            {helperText || (computedState === 'success' ? 'Success text' : 'Error text')}
          </div>
        </div>
      )}
    </div>
  )
}
