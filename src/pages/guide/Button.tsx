import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { useState } from 'react'
import type { ButtonProps } from '../../types/components'
import IcoCheck from '../../assets/icon/ico-check.svg?react'

function GuideButton() {
  const [buttonProps, setButtonProps] = useState({
    size: 'lg',
    variant: 'contained',
    disabled: false,
    radius: '24px',
    type: 'button',
    fullWidth: false,
    children: 'button',
    btnColor: '#6366F1',
    hoverColor: '#4F46E5',
    hoverEffect: true,
    onClick: () => {
      console.log('클릭')
    },
  } as ButtonProps)

  return (
    <>
      <div className="sui-page-wrapper">
        <div className="sui-guide">
          <h2 className="sui-guide__title">Button</h2>
          <div className="sui-guide__control">
            <Button
              {...buttonProps}
            >
              {buttonProps.children}          
            </Button>
            <Button
              {...buttonProps}
            >
              {buttonProps.children}      
              <IcoCheck />
            </Button>
            <Button
              {...buttonProps}
            > 
              <IcoCheck />
              {buttonProps.children}   
            </Button>
            <div className="sui-guide__control-group">
              <div>
                <label>버튼 텍스트</label>  
                <Input
                  name="button-children"
                  id="button-children"
                  type="text"
                  onChange={(e) => setButtonProps({ ...buttonProps, children: e.target.value })}
                  value={buttonProps.children as string}
                />
              </div>
              <div>
                <label>사이즈</label>
                <select value={buttonProps.size} onChange={(e) => setButtonProps({ ...buttonProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>모양</label>
                <select value={buttonProps.variant} onChange={(e) => setButtonProps({ ...buttonProps, variant: e.target.value as 'contained' | 'outlined' | 'text' })}>
                  <option value="contained">contained</option>
                  <option value="outlined">outlined</option>
                  <option value="text">text</option>
                </select>
              </div>
              <div>
                <label>Radius</label>
                <Input
                  name="button-radius"
                  id="button-radius"
                  type="number"
                  size="md"
                  onChange={(e) => setButtonProps({ ...buttonProps, radius: e.target.value + 'px' as `${number}px` })}
                  value={buttonProps.radius?.replace('px', '') || ''}
                />
                <span>px</span>
              </div>
              <div>
                <label>기본 색상</label>
                <input type="color" value={buttonProps.btnColor} onChange={(e) => setButtonProps({ ...buttonProps, btnColor: e.target.value })} />
              </div>
              <div>
                <label>hover 색상</label>
                <input type="color" value={buttonProps.hoverColor} onChange={(e) => setButtonProps({ ...buttonProps, hoverColor: e.target.value })} />
              </div>
              <div>
                <label>텍스트 색상</label>
                <input type="color" value={buttonProps.textColor || (buttonProps.variant === 'contained' ? '#ffffff' : '#4F46E5')} onChange={(e) => setButtonProps({ ...buttonProps, textColor: e.target.value })} />
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setButtonProps({ ...buttonProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e) => setButtonProps({ ...buttonProps, fullWidth: e.target.checked })} />
              </div>
              <div>
                <label>hover 효과</label>
                <input type="checkbox" checked={buttonProps.hoverEffect} onChange={(e) => setButtonProps({ ...buttonProps, hoverEffect: e.target.checked })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideButton