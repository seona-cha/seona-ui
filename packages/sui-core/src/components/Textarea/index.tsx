import React from 'react'
import type { InputProps } from '../../types/components'
import './textarea.scss'

export type { InputProps as TextareaProps }

const Textarea: React.FC<InputProps> = ({
  name,
  id,
  value,
  disabled = false,
  size = 'md',
  variant = 'filled',
  fullWidth,
  hiddenLabel,
  onChange,
  placeholder,
  radius = '0px',
  className = '',
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