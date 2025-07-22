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
  btnColor = '#6366F1',
  hoverColor = '#4F46E5',
  textColor = variant === 'contained' ? '#fff' : 'var(--btn-color)',
  hoverEffect = true,
  radius = '0px',
}) => {
  const classes = [
    'sui-button',
    `sui-button--${variant}`,
    `sui-button--${size}`,
    fullWidth ? 'sui-button--full-width' : '',
    disabled ? 'sui-button--disabled' : '',
    hoverEffect ? '' : 'sui-button--no-hover-effect',
    className,
  ].filter(Boolean).join(' ');

  const styles = {
    '--btn-radius': radius,
    '--btn-color': btnColor,
    '--btn-hover-color': hoverColor,
    '--btn-text-color': textColor,
  } as React.CSSProperties;

  if (type === 'link') {
    return (
      <a 
        style={styles}
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
        style={styles}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel || ''}
      >
        {children}
      </button>
    )
  } 
}

export default Button