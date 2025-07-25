import React from 'react'
import type { InputProps } from '../../../types/components'
import './input.scss'

const Input: React.FC<InputProps> = ({
  name,
  id,
  type = 'text',
  value,
  disabled = false,
  size = 'md',
  variant = 'filled',
  fullWidth,
  hiddenLabel,
  onChange,
  onBlur,
  placeholder,
  radius = '0px',
  className = '',
  error = false,
  errorMessage = '입력값을 확인해주세요.',
}) => {
  const classes = [
    'sui-input',
    `sui-input--${variant}`,
    `sui-input--${size}`,
    fullWidth ? 'sui-input--full-width' : '',
    disabled ? 'sui-input--disabled' : '',
    error ? 'sui-input--error' : '',
    className,
  ].filter(Boolean).join(' ');

  const styles = {
    '--input-radius': radius,
  } as React.CSSProperties;

  return (
      <div className={classes}>
          {hiddenLabel && (
              <label className="sui-input__hidden-label" htmlFor={id}>
              {hiddenLabel}
              </label>
          )}
          <input 
              id={id}
              name={name}
              type={type}
              style={styles}
              onChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
              placeholder={placeholder}
              value={value}
          >
          </input>
          {error && (
            <div className="sui-input__error-message">
              {errorMessage}
            </div>
          )}
      </div>
  )
}

export default Input