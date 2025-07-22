import React from 'react'
import type { CheckBoxProps } from '../../../types/components'
import './checkbox.scss'

const Checkbox: React.FC<CheckBoxProps> = ({
    label = '',
    size = 'md',
    hiddenLabel = false,
    disabled = false,
    checked = false,
    variant = 'square',
    bgColor = '#2186df',
    onChange,
}) => {     
    const classes = [
        'sui-checkbox',
        `sui-checkbox--${size}`,
        `sui-checkbox--${variant}`,
        hiddenLabel && 'sui-checkbox--hidden-label',
    ].filter(Boolean).join(' ')

    const style = {
        '--sui-checkbox-bg-color': bgColor,
    } as React.CSSProperties

    return (
        <div className={classes} style={style}>
            <input type="checkbox" id={label} name={label} onChange={onChange} disabled={disabled} checked={checked} />
            <label className="sui-checkbox__label" htmlFor={label} tabIndex={0} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.currentTarget.click()
                }
            }}>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default Checkbox