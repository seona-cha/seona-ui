import Button from './components/ui/Button'
import Input from './components/ui/Input'
import Textarea from './components/ui/Textarea'
import { useState } from 'react'
import type { ButtonProps } from './types/components'

function App() {

  const [inputValue, setInputValue] = useState({
    input1: '',
    input2: '',
    input3: '',
    textarea1: '',
    textarea2: '',
    textarea3: '',
  })

  const [buttonProps, setButtonProps] = useState({
    size: 'lg',
    variant: 'contained',
    disabled: false,
    radius: '24px',
    type: 'button',
    fullWidth: false,
    children: 'h2',
    btnColor: '#6366F1',
    hoverColor: '#4F46E5',
    containedTextColor: '#fff',
  } as ButtonProps)

  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  const onClickEvent = () => {
    console.log('클릭')
  }

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
          <li>button</li>
          <li>input</li>
          <li>textarea</li>
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
          <h2 className="sui-guide__title">button</h2>
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
                  <input type="number" onChange={(e) => setButtonProps({ ...buttonProps, radius: e.target.value + 'px' as `${number}px` })} /> px
                </div>
                <div>
                  <label>Full Width</label>
                  <input type="checkbox" onChange={(e) => setButtonProps({ ...buttonProps, fullWidth: e.target.checked })} />
                </div>
                <div>
                  <label>버튼 텍스트</label>  
                  <input type="text" onChange={(e) => setButtonProps({ ...buttonProps, children: e.target.value })} />
                </div>
              </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <div>
              <Button
                size="sm"
                onClick={onClickEvent}
                variant={"contained"}
                disabled={false}
                radius="999px"
              >
                다운로드
              </Button>
              <Button
                size="sm"
                variant={"outlined"}
                disabled={false}
                type="link"
                href="https://www.naver.com"
                target="_blank"
              >
                button
              </Button>
              <Button
                size="sm"
                variant={"text"}
                disabled={false}
                type="link"
                href="https://www.naver.com"
                target="_blank"
              >
                button
              </Button>
            </div>
            <div>
              <Button
                size="md"
                onClick={onClickEvent}
                variant={"contained"}
                disabled={false}
                radius="999px"
              >
                button
              </Button>
              <Button
                size="md"
                variant={"outlined"}
                disabled={false}
                type="link"
                href="https://www.naver.com"
                target="_blank"
              >
                button
              </Button>
              <Button
                size="md"
                variant={"text"}
                disabled={false}
                type="link"
                href="https://www.naver.com"
                target="_blank"
              >
                button
              </Button>
            </div>
            <div>
              <Button
                size="lg"
                onClick={onClickEvent}
                variant={"contained"}
                disabled={false}
                radius="999px"
              >
                button
              </Button>
              <Button
                size="lg"
                variant={"outlined"}
                disabled={false}
                type="link"
                href="https://www.naver.com"
                target="_blank"
              >
                button
              </Button>
            </div>
              <Button
                size="lg"
                variant={"outlined"}
                disabled={false}
                type="link"
                href="https://www.naver.com"
                target="_blank"
                fullWidth={true}
              >
                button
              </Button>
          </div>
          
          <h2 className="sui-guide__title">input</h2>
          <Input
            id="input1"
            name="input1"
            hiddenLabel="input"
            value={inputValue.input1}
            size="sm"
            type="text"
            onChange={onChangeEvent}
          />
          <Input
            id="input2"
            name="input2"
            hiddenLabel="input"
            value={inputValue.input2}
            type="text"
            onChange={onChangeEvent}
          />
          <Input
            id="input3"
            name="input3"
            value={inputValue.input3}
            type="text"
            size="lg"
            onChange={onChangeEvent}
          />
          <Input
            id="input3"
            name="input3"
            value={inputValue.input3}
            type="text"
            size="lg"
            onChange={onChangeEvent}
            fullWidth={true}
          />
          <Textarea
            id="textarea1"
            name="textarea1"
            value={inputValue.textarea1}
            onChange={onChangeEvent}
            size="sm"
          />
          <Textarea
            id="textarea2"
            name="textarea2"
            value={inputValue.textarea2}
            onChange={onChangeEvent}
            size="md"
            resize="horizontal"
          />  
          <Textarea
            id="textarea3"
            name="textarea3"
            value={inputValue.textarea3}
            onChange={onChangeEvent}
            size="lg"
            resize="both"
          />
          <Textarea
            id="textarea3"
            name="textarea3"
            value={inputValue.textarea3}
            onChange={onChangeEvent}
            size="lg"
            fullWidth={true}
            resize="vertical"
          />
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
