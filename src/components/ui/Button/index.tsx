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
  btnColor = '#2186df',
  hoverColor = '#0759d5',
  containedTextColor = '#fff',
  radius = '0px',
}) => {
  const classes = [
    'sui-button',
    `sui-button--${variant}`,
    `sui-button--${size}`,
    fullWidth ? 'sui-button--full-width' : '',
    disabled ? 'sui-button--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const styles = {
    '--btn-radius': radius,
    '--btn-color': btnColor,
    '--btn-hover-color': hoverColor,
    '--contained-text-color': containedTextColor,
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