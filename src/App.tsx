import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Textarea from './components/ui/Textarea'
import Checkbox from './components/ui/Checkbox'
import { useState } from 'react'
import type { ButtonProps, InputProps, CheckBoxProps } from './types/components'

function App() {

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

  const [InputProps, setInputProps] = useState({
    value: '',
    name: 'input',
    id: 'input',
    hiddenLabel: 'input',
    size: 'md',
    variant: 'filled',
    fullWidth: false,
    placeholder: '',
    type: 'text',
    radius: '6px',
    onChange: () => {},
  } as InputProps)

  const [TextareaProps, setTextareaProps] = useState({
    value: '',
    name: 'textarea',
    id: 'textarea',
    hiddenLabel: 'textarea',
    size: 'md',
    fullWidth: false,
    variant: 'filled',
    placeholder: '',
    radius: '6px',
    onChange: () => {},
  } as InputProps)

  const [CheckboxProps, setCheckboxProps] = useState({
    label: 'label',
    size: 'md',
    color: '#6366F1',
    hiddenLabel: false,
    value: '',
    disabled: false,
    checked: false,
    onChange: () => {},
  } as CheckBoxProps)

  return (
    <>
      <header className="sui-header">
        <div className="sui-header__inner">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#6366F1" height="30px" width="30px" version="1.1" id="Icons" viewBox="0 0 32 32" xmlSpace="preserve">
            <g>
              <path d="M16,11c-4.5,0-8-2.2-8-5s3.5-5,8-5s8,2.2,8,5S20.5,11,16,11z"/>
            </g>
            <path d="M16,13c-3.3,0-6.2-1-8-2.7V11c0,2.8,3.5,5,8,5s8-2.2,8-5v-0.7C22.2,12,19.3,13,16,13z"/>
            <path d="M30.9,11.7C30.9,11.6,30.9,11.6,30.9,11.7c-0.1-0.2-0.1-0.3-0.2-0.3c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1L26,8.2V11  c0,4-4.3,7-10,7S6,15,6,11V8.2l-4.5,2.9c-0.1,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.3c0,0,0,0,0,0.1  C1,11.8,1,11.9,1,12v9c0,0.3,0.2,0.7,0.5,0.8l14,9c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1  c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l14-9c0.3-0.2,0.5-0.5,0.5-0.8v-9C31,11.9,31,11.8,30.9,11.7z"/>
          </svg>
          <h1>Sen UI</h1>
        </div>
      </header>
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
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 78.369 78.369" xmlSpace="preserve">
                <g>
                  <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   C78.477,17.894,78.477,18.586,78.049,19.015z"/>
                </g>
              </svg>      
            </Button>
            <Button
              {...buttonProps}
            > 
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 78.369 78.369" xmlSpace="preserve">
                <g>
                  <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704   c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704   C78.477,17.894,78.477,18.586,78.049,19.015z"/>
                </g>
              </svg>   
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
          
          <h2 className="sui-guide__title">Input</h2>
          <div className="sui-guide__control">
            <Input
              {...InputProps}
              onChange={(e) => setInputProps({ ...InputProps, value: e.target.value })}
            />
            <div className="sui-guide__control-group">
              <div>
                <label htmlFor="input-placeholder">placeholder</label>
                <Input
                  name="input-placeholder"
                  id="input-placeholder"
                  type="text"
                  value={InputProps.placeholder as string}
                  onChange={(e) => setInputProps({ ...InputProps, placeholder: e.target.value })}
                />
              </div>
              <div>
                <label>사이즈</label>
                <select value={InputProps.size} onChange={(e) => setInputProps({ ...InputProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>모양</label>
                <select value={InputProps.variant} onChange={(e) => setInputProps({ ...InputProps, variant: e.target.value as 'filled' | 'outlined' | 'underline' })}>
                  <option value="filled">filled</option>
                  <option value="outlined">outlined</option>
                  <option value="underline">underline</option>
                </select>
              </div>
              <div>
                <label>Radius</label>
                <Input
                  name="input-radius"
                  id="input-radius"
                  type="number"
                  size="md"
                  onChange={(e) => setInputProps({ ...InputProps, radius: e.target.value + 'px' as `${number}px` })}
                  value={InputProps.radius?.replace('px', '') || ''}
                />
                <span>px</span>
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setInputProps({ ...InputProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e) => setInputProps({ ...InputProps, fullWidth: e.target.checked })} />
              </div>
            </div>
          </div>
          
          <h2 className="sui-guide__title">Textarea</h2>
          <div className="sui-guide__control">
            <Textarea 
              className="sui-guide__textarea"
              {...TextareaProps}
              onChange={(e) => setTextareaProps({ ...TextareaProps, value: e.target.value })}
            />
            <div className="sui-guide__control-group">
              <div>
                <label htmlFor="textarea-placeholder">placeholder</label>
                <Input
                  name="textarea-placeholder"
                  id="textarea-placeholder"
                  type="text"
                  value={TextareaProps.placeholder as string}
                  onChange={(e) => setTextareaProps({ ...TextareaProps, placeholder: e.target.value })}
                />
              </div>
              <div>
                <label>사이즈</label>
                <select value={TextareaProps.size} onChange={(e) => setTextareaProps({ ...TextareaProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>모양</label>
                <select value={TextareaProps.variant} onChange={(e) => setTextareaProps({ ...TextareaProps, variant: e.target.value as 'filled' | 'outlined' | 'underline' })}>
                  <option value="filled">filled</option>
                  <option value="outlined">outlined</option>
                </select>
              </div>
              <div>
                <label>Resize</label>
                <select value={TextareaProps.resize} onChange={(e) => setTextareaProps({ ...TextareaProps, resize: e.target.value as 'none' | 'both' | 'horizontal' | 'vertical' })}>
                  <option value="none">none</option>
                  <option value="both">both</option>
                  <option value="horizontal">horizontal</option>
                  <option value="vertical">vertical</option>
                </select>
                <Button
                  size="sm"
                  variant="text"
                  onClick={() => {
                    const textarea = document.querySelector('.sui-guide__textarea textarea') as HTMLTextAreaElement
                    textarea.style.removeProperty('width')
                    textarea.style.removeProperty('height')
                  }}
                >
                  reset
                </Button>
              </div>
              <div>
                <label>Radius</label>
                <Input
                  name="textarea-radius"
                  id="textarea-radius"
                  type="number"
                  size="md"
                  onChange={(e) => setTextareaProps({ ...TextareaProps, radius: e.target.value + 'px' as `${number}px` })}
                  value={TextareaProps.radius?.replace('px', '') || ''}
                />
                <span>px</span>
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setTextareaProps({ ...TextareaProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e) => setTextareaProps({ ...TextareaProps, fullWidth: e.target.checked })} />
              </div>
            </div>
          </div>
          
          <h2 className="sui-guide__title">Checkbox</h2>
          <div className="sui-guide__control">
            <Checkbox
              {...CheckboxProps}
              onChange={(e) => setCheckboxProps({ ...CheckboxProps, checked: e.target.checked })}
            />
            <div className="sui-guide__control-group">
              <div>
                <label>레이블</label>
                <Input
                  name="checkbox-label"
                  id="checkbox-label"
                  type="text"
                  value={CheckboxProps.label}
                  onChange={(e) => setCheckboxProps({ ...CheckboxProps, label: e.target.value })}
                />
              </div>
              <div>
                <label>사이즈</label>
                <select value={CheckboxProps.size} onChange={(e) => setCheckboxProps({ ...CheckboxProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>모양</label>
                <select value={CheckboxProps.variant} onChange={(e) => setCheckboxProps({ ...CheckboxProps, variant: e.target.value as 'square' | 'circle' })}>
                  <option value="square">square</option>
                  <option value="circle">circle</option>
                  <option value="line">line</option>
                </select>
              </div>
              <div>
                <label>색상</label>
                <input type="color" value={CheckboxProps.color} onChange={(e) => setCheckboxProps({ ...CheckboxProps, color: e.target.value })} />
              </div>
              <div>
                <label>레이블 숨김</label>
                <input type="checkbox" onChange={(e) => setCheckboxProps({ ...CheckboxProps, hiddenLabel: e.target.checked })} />
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setCheckboxProps({ ...CheckboxProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>체크 여부</label>
                <input type="checkbox" onChange={(e) => setCheckboxProps({ ...CheckboxProps, checked: e.target.checked })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

/*
  각 컴포넌트 구현 후 가이드 페이지 제작
  갤러리 형태로 6개씩 나열, 페이지네이션으로 페이지 이동
  각 컴포넌트 클릭 시 상단 하이라이트 표시(컴포넌트 이름, ui, 코드 예시-복사가능하도록), 
  하단 아코디언 열면 props 예시 보여주기
  더보기 버튼 클릭시 모달창 표시: 컴포넌트 예시, props 예시, 토글 형태로 컴포넌트 예시 보여주기

  + 가이드 페이지 추가 기능 +
  RGB to HEX 변환 기능 추가
  PSD Drop Shadow -> CSS Box Shadow 변환 기능 추가
  SVG 압축 기능 추가
  이미지 압축 기능 추가
*/
