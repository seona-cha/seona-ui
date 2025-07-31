import React, { useState } from 'react';
import type { SelectProps } from '../../../types/components';
import './select.scss';


const Select: React.FC<SelectProps> = ({
    options = [],
    size = 'md',
    variant = 'filled',
    disabled = false,
    value,
    setValue,
    color = '#6366F1',
    placeholder = 'Select',
    width,
    fullWidth = false,
    onChange,
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const classes = [
        'sui-select',
        `sui-select--${size}`,
        `sui-select--${variant}`,
        disabled && 'sui-select--disabled',
        isOpen && 'sui-select--open',
        fullWidth && 'sui-select--full-width',
    ].filter(Boolean).join(' ')

    const styles = {
        '--sui-select-color': color,
        '--sui-select-width': width,
    } as React.CSSProperties;

    return (
        <div className={classes} style={styles}>
            <div 
                className="sui-select__selected"
                onClick={()=> {
                    if (disabled) return;
                    setIsOpen(!isOpen)
                }}
            >
                {value ? value : placeholder}
            </div>
            <ul 
                className="sui-select__option-list" 
                style={{
                    display: isOpen ? 'block' : 'none',
                }}
            >
                {options.map((option) => (
                    <li 
                        className="sui-select__option-item"
                        key={option.value} 
                        value={option.value}
                        onClick={() => {
                            if (option.disabled) return;
                            setValue && setValue(option.value);
                            setIsOpen(false);
                            onChange && onChange();
                        }}
                    >{option.label}</li>
                ))}
            </ul>
        </div>
    )
}

export default Select;