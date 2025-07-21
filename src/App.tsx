import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Textarea from './components/ui/Textarea'
import { useState } from 'react'
import type { ButtonProps, TextInputProps } from './types/components'

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
    containedTextColor: '#fff',
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
    fullWidth: false,
    type: 'text',
    onChange: () => {},
  } as TextInputProps)

  const [TextareaProps, setTextareaProps] = useState({

    value: '',
    name: 'textarea',
    id: 'textarea',
    hiddenLabel: 'textarea',
    size: 'md',
    fullWidth: false,
    onChange: () => {},
  } as TextInputProps)

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
        {/* <ol>
          <li>checkbox</li>
          <li>radio</li>
          <li>select</li>
          <li>switch</li>
          <li>modal</li>
          <li>tooltip</li>
          <li>dropdown</li>
          <li>pagination</li>
          <li>table</li>
          <li>tabs</li>
          <li>alert</li>
          <li>badge</li>
          <li>card</li>
          <li>collapse</li>
          <li>carousel</li>
        </ol> */}
        <div className="sui-guide">
          <h2 className="sui-guide__title">Button</h2>
          <div className="sui-guide__control">
            <Button
              {...buttonProps}
            >
              {buttonProps.children}          
            </Button>
            <div className="sui-guide__control-group">
              <div>
                <label>사이즈</label>
                <select value={buttonProps.size} onChange={(e) => setButtonProps({ ...buttonProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>버튼 모양</label>
                <select value={buttonProps.variant} onChange={(e) => setButtonProps({ ...buttonProps, variant: e.target.value as 'contained' | 'outlined' | 'text' })}>
                  <option value="contained">contained</option>
                  <option value="outlined">outlined</option>
                  <option value="text">text</option>
                </select>
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setButtonProps({ ...buttonProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Radius</label>
                <Input
                  name="radius"
                  id="radius"
                  type="number"
                  size="md"
                  onChange={(e) => setButtonProps({ ...buttonProps, radius: e.target.value + 'px' as `${number}px` })}
                  value={buttonProps.radius?.replace('px', '') || ''}
                />
                <span>px</span>
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e) => setButtonProps({ ...buttonProps, fullWidth: e.target.checked })} />
              </div>
              <div>
                <label>버튼 텍스트</label>  
                <Input
                  name="children"
                  id="children"
                  type="text"
                  onChange={(e) => setButtonProps({ ...buttonProps, children: e.target.value })}
                  value={buttonProps.children as string}
                />
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
              {/* <div>
                <label>타입</label>
                <select value={InputProps.type} onChange={(e) => setInputProps({ ...InputProps, type: e.target.value as 'text' | 'number' | 'password' | 'email' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color' | 'file' | 'hidden' | 'image' | 'range' | 'textarea' })}>
                  <option value="text">text</option>
                  <option value="number">number</option>
                  <option value="password">password</option>
                  <option value="email">email</option>
                  <option value="tel">tel</option>
                  <option value="url">url</option>
                  <option value="search">search</option>
                  <option value="date">date</option>
                  <option value="time">time</option>
                  <option value="datetime-local">datetime-local</option>
                  <option value="month">month</option>
                  <option value="week">week</option>
                  <option value="color">color</option>
                  <option value="file">file</option>
                  <option value="hidden">hidden</option>
                  <option value="image">image</option>
                  <option value="range">range</option>
                </select>
              </div> */}
              <div>
                <label>사이즈</label>
                <select value={InputProps.size} onChange={(e) => setInputProps({ ...InputProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setInputProps({ ...InputProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Radius</label>
                <Input
                  name="radius"
                  id="radius"
                  type="number"
                  size="md"
                  onChange={(e) => setInputProps({ ...InputProps, radius: e.target.value + 'px' as `${number}px` })}
                  value={InputProps.radius?.replace('px', '') || ''}
                />
                <span>px</span>
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e) => setInputProps({ ...InputProps, fullWidth: e.target.checked })} />
              </div>
            </div>
            <div>
              <p>hiddenLabel Props 활용 예시</p>
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
                <label>사이즈</label>
                <select value={TextareaProps.size} onChange={(e) => setTextareaProps({ ...TextareaProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e) => setTextareaProps({ ...TextareaProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Radius</label>
                <Input
                  name="radius"
                  id="radius"
                  type="number"
                  size="md"
                  onChange={(e) => setTextareaProps({ ...TextareaProps, radius: e.target.value + 'px' as `${number}px` })}
                  value={TextareaProps.radius?.replace('px', '') || ''}
                />
                <span>px</span>
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e) => setTextareaProps({ ...TextareaProps, fullWidth: e.target.checked })} />
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
            </div>
          </div>
          
          <h2 className="sui-guide__title">Checkbox</h2>
        </div>
      </div>
    </>
  )
}

export default App

/*
  각 컴포넌트 구현 후 가이드 페이지 제작
  갤러리 형태로 10개씩 나열, 페이지네이션으로 페이지 이동
  각 컴포넌트 클릭 시 상단 하이라이트 표시(컴포넌트 이름, ui, 코드 예시-복사가능하도록), 
  하단 아코디언 열면 props 예시 보여주기
  더보기 버튼 클릭시 모달창 표시: 컴포넌트 예시, props 예시, 토글 형태로 컴포넌트 예시 보여주기

  + 가이드 페이지 추가 기능 +
  RGB to HEX 변환 기능 추가
  PSD Drop Shadow -> CSS Box Shadow 변환 기능 추가
  SVG 압축 기능 추가
  이미지 압축 기능 추가
*/
