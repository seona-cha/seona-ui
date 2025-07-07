import React from 'react'
import type { ButtonProps } from '../types/components'

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  type = 'button',
  variant = 'solid',
  href,
  target,
  disabled = false,
  size = 'md',
  fullWidth,
  loading,
  ariaLabel,
  toolTip,
  onClick,
}) => {
  if (type == 'button') {
    return (
      <>
        <button 
          className={`button--${variant} button--${size} ${className}`}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </>
    )
  } 
}

export default Button