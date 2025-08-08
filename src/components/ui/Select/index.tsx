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
    className,
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const classes = [
        'sui-select',
        `sui-select--${size}`,
        `sui-select--${variant}`,
        disabled && 'sui-select--disabled',
        isOpen && 'sui-select--open',
        fullWidth && 'sui-select--full-width',
        className,
    ].filter(Boolean).join(' ')

    const styles = {
        '--sui-select-color': color,
        '--sui-select-width': width,
    } as React.CSSProperties;

    
    const navigateOption = (e: React.KeyboardEvent) => {
        e.preventDefault();

        let nextIndex: number = currentIndex;
        
        if (e.key === 'ArrowUp') {
            nextIndex = currentIndex === 1 ? options.length : currentIndex - 1;
        } else if (e.key === 'ArrowDown') {
            nextIndex = currentIndex === options.length ? 1 : currentIndex + 1;
        } else {
            return;
        }

        setCurrentIndex(nextIndex);
        (document.querySelector(`.sui-select__option-item:nth-child(${nextIndex})`) as HTMLElement)?.focus();   
    }

    return (
        <div className={classes} style={styles}>
            <div 
                className="sui-select__selected"
                tabIndex={disabled ? -1 : 0}
                onClick={()=> {
                    if (disabled) return;
                    setIsOpen(!isOpen)
                }}
                onKeyDown={(e) => {
                    // 엔터 또는 스페이스바 클릭 시 옵션 리스트 열기
                    if (e.key === 'Enter' || e.key === ' ') {
                        if (disabled) return;
                        setIsOpen(!isOpen);

                        // 선택된 옵션값으로 포커스
                        if (value) {
                            const selectedOption = options.find(option => option.value === value);
                            if (selectedOption) {
                                setCurrentIndex(options.indexOf(selectedOption) + 1);
                                setTimeout(() => {
                                    (document.querySelector(`.sui-select__option-item:nth-child(${options.indexOf(selectedOption) + 1})`) as HTMLElement)?.focus();
                                }, 0);
                            }
                        }
                    }
                    // 위 아래 키 누르면 옵션 리스트 이동
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                        navigateOption(e);
                    }
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
                {options.map((option, index) => (
                    <li 
                        className="sui-select__option-item"
                        key={option.value} 
                        value={option.value}
                        tabIndex={option.disabled ? -1 : 0}
                        onFocus={() => {
                            // 포커스가 이동했을 때 currentIndex 업데이트
                            setCurrentIndex(index + 1);
                        }}
                        onClick={() => {
                            if (option.disabled) return;
                            setValue && setValue(option.value);
                            setIsOpen(false);
                            onChange && onChange();
                        }}
                        onKeyDown={(e) => {
                            // 엔터 또는 스페이스바 클릭 시 옵션 선택
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                if (option.disabled) return;
                                setIsOpen(false);
                                setCurrentIndex(1);
                                setValue && setValue(option.value);
                                onChange && onChange();
                                (document.querySelector('.sui-select__selected') as HTMLElement)?.focus();
                            }
                            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                                navigateOption(e);
                            }   
                        }}
                    >{option.label}</li>
                ))}
            </ul>
        </div>
    )
}

export default Select;