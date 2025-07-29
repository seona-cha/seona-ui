import React from 'react';
import type { RadioProps } from '../../../types/components'
import './radio.scss';


const Radio: React.FC<RadioProps> = ({
    name,
    size = 'md',
    hiddenLabel = false,
    className,
    variant = 'circle',
    color = '#6366F1',
    options = [],
    onChange,
    direction = 'horizontal',
    fullWidth = false,
}) => {
  const classes = [
    'sui-radio',
    `sui-radio--${size}`,
    `sui-radio--${variant}`,
    `sui-radio--${direction}`,
    fullWidth && 'sui-radio--full-width',
    hiddenLabel && 'sui-radio--hidden-label',
    className,
  ].filter(Boolean).join(' ')

  const styles = {
    '--sui-radio-color': color,
  } as React.CSSProperties

  return (
    <div className={classes} style={styles}>
        {options?.map((option) => (
            <div 
                key={option.value} 
                className="sui-radio__option" 
            >
                <input 
                    type="radio" 
                    id={option.value}
                    name={name}
                    value={option.value}
                    onChange={onChange}
                    disabled={option.disabled}
                />
                <label 
                    className="sui-radio__label" 
                    htmlFor={option.value} 
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.currentTarget.click()
                        }
                    }}
                >
                    <span>{option.label}</span>
                </label>
            </div>
        ))}
    </div>
  );
};

export default Radio;