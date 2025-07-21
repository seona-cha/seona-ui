import React from 'react'
import type { InputProps } from '../../../types/components'
import './textarea.scss'

const Textarea: React.FC<InputProps> = ({
  className = '',
  disabled = false,
  size = 'md',
  fullWidth,
  name,
  id,
  value,
  variant = 'filled',
  hiddenLabel,
  onChange,
  placeholder,
  radius = '0px',
  resize = 'none',
}) => {
  const classes = [
    'sui-textarea',
    `sui-textarea--${variant}`,
    `sui-textarea--${size}`,
    fullWidth ? 'sui-textarea--full-width' : '',
    disabled ? 'sui-textarea--disabled' : '',
    resize ? `sui-textarea--resize-${resize}` : '',
    className,
  ].filter(Boolean).join(' ');

  const styles = {
    '--textarea-radius': radius,
  } as React.CSSProperties;

  return (
    <div className={classes}>
        {hiddenLabel && (
            <label className="sui-textarea__hidden-label" htmlFor={id}>
            {hiddenLabel}
            </label>
        )}
        <textarea 
            id={id}
            name={name}
            style={styles}
            className={classes}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            value={value}
        >
        </textarea>
    </div>
  )
}

export default Textarea;