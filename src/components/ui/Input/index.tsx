import React from 'react'
import type { TextInputProps } from '../../../types/components'
import './input.scss'

const Input: React.FC<TextInputProps> = ({
  className = '',
  disabled = false,
  size = 'md',
  fullWidth,
  name,
  id,
  value,
  type = 'text',
  variant = 'filled',
  hiddenLabel,
  onChange,
  placeholder,
  radius = '0px',
}) => {
  const classes = [
    'sui-input',
    `sui-input--${variant}`,
    `sui-input--${size}`,
    fullWidth ? 'sui-input--full-width' : '',
    disabled ? 'sui-input--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const styles = {
    '--input-radius': radius,
  } as React.CSSProperties;

return (
    <div className="sui-input">
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
            className={classes}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
        >
        </input>
    </div>
)
}

export default Input