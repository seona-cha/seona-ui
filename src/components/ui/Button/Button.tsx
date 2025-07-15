import React from 'react'
import type { ButtonProps } from '../../../types/components'
import './button.scss'

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  variant = 'contained',
  href,
  target,
  disabled = false,
  size = 'md',
  fullWidth,
  ariaLabel,
  onClick,
}) => {
  const classes = `sui-button sui-button--${variant} sui-button--${size} ${fullWidth ? 'sui-button--full-width' : ''} ${disabled ? 'sui-button--disabled' : ''} ${className ? className : ''}`

  if (type === 'link') {
    return (
      <a 
        className={classes}
        href={disabled ? undefined : href}
        target={disabled ? undefined : target}
        aria-label={ariaLabel || ''}
        aria-disabled={disabled}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button 
        className={classes}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel || ''}  
        aria-disabled={disabled}
      >
        {children}
      </button>
    )
  } 
}

export default Button