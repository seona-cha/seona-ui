import Button from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import { useState } from 'react'
import type { ButtonProps } from '../../types/components'
import IcoCheck from '../../assets/icon/ico-check.svg?react'
import CodeContainer from '../../components/ui/CodeContainer'

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
          <p className="sui-guide__description">
            버튼 컴포넌트는 클릭시 링크 이동 혹은 함수를 호출하는 버튼을 생성하는 데 사용됩니다. <br />크기, 모양, 색상, 아이콘 추가 옵션을 제공하여 버튼의 모양과 기능을 조정할 수 있습니다.
          </p>
          <div className="sui-guide__content">
            <h3 className="sui-guide__subtitle">Size Option</h3>
            <p className="sui-guide__description">
              버튼의 크기를 조정할 수 있는 옵션으로, 'sm', 'md', 'lg' 세 가지 옵션을 제공합니다. <br />
              사이즈 옵션을 따로 지정하지 않을 경우 기본 버튼 크기는 'md' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">sm</p>
              <Button size="sm">Button</Button>
              <p className="sui-guide__content-item-title">md</p>
              <Button size="md">Button</Button>
              <p className="sui-guide__content-item-title">lg</p>
              <Button size="lg">Button</Button>
              <CodeContainer>
{`<Button size="sm">Button</Button>
<Button size="md">Button</Button>
<Button size="lg">Button</Button>`}
              </CodeContainer>
            </div>
            <h3 className="sui-guide__subtitle">Variant Option</h3>
            <p className="sui-guide__description">
              버튼의 모양을 조정할 수 있는 옵션으로, 'contained', 'outlined', 'text' 세 가지 옵션을 제공합니다. <br />
              모양 옵션을 따로 지정하지 않을 경우 기본 버튼 모양은 'contained' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">contained</p>
              <Button variant="contained">Contained</Button>
              <p className="sui-guide__content-item-title">outlined</p>
              <Button variant="outlined">Outlined</Button>
              <p className="sui-guide__content-item-title">text</p>
              <Button variant="text">Text</Button>
            </div>
            <CodeContainer>
              {`<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Radius Option</h3>
            <p className="sui-guide__description">
              버튼의 Radius를 조정할 수 있는 옵션으로, 숫자를 입력하여 Radius 값을 조정할 수 있습니다. <br />
              따로 옵션값을 입력하지 않을 경우 기본 버튼 Radius는 0px입니다.
            </p>
            <div className="sui-guide__content-item">
              <input type="range" min="0" max="24" onChange={(e) => setButtonProps({ ...buttonProps, radius: e.target.value + 'px' as `${number}px` })} />
              <p className="sui-guide__content-item-title">Radius: {buttonProps.radius} (조정해 보세요!)</p>
              <Button radius={buttonProps.radius}>Button</Button>
            </div>
            <CodeContainer>
              {`<Button radius="${buttonProps.radius}">Button</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Disabled Option</h3>
            <p className="sui-guide__description">
              버튼의 비활성화 상태를 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              비활성화 옵션을 따로 지정하지 않을 경우 기본값은 'false' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Button disabled>Button</Button>
              <p className="sui-guide__content-item-title">False (기본값)</p>
              <Button>Button</Button>
            </div>
            <CodeContainer>
              {`<Button disabled>Button</Button>
<Button>Button</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Full Width Option</h3>
            <p className="sui-guide__description">
              버튼이 부모 컨테이너의 전체 너비를 차지하도록 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              전체너비 옵션을 따로 지정하지 않을 경우 기본값은 'false' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Button fullWidth>Button</Button>
              <p className="sui-guide__content-item-title">False</p>
              <Button>Button</Button>
            </div>
            <CodeContainer>
              {`<Button fullWidth>Button</Button>
<Button>Button</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Hover Effect Option</h3>
            <p className="sui-guide__description">
              버튼의 호버 효과를 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              호버 효과 옵션을 따로 지정하지 않을 경우 기본 버튼 호버 효과는 'true' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Button hoverEffect>Button</Button>  
              <p className="sui-guide__content-item-title">False</p>
              <Button hoverEffect={false}>Button</Button>
            </div>
            <CodeContainer>
              {`<Button>Button</Button>
<Button hoverEffect={false}>Button</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Icon Option</h3>
            <p className="sui-guide__description">
              아이콘은 버튼 내부 Children 영역에 추가하여 위치에 구애받지 않고 자유롭게 배치할 수 있습니다.
            </p>
            <div className="sui-guide__content-item">
              <Button>
                <IcoCheck />
                button
              </Button>
              <Button>
                button
                <IcoCheck />
              </Button>
            </div>
            <CodeContainer>
              {`{/* 왼쪽 아이콘 */}
<Button>
  <IcoCheck />
  button
</Button>

{/* 오른쪽 아이콘 */}
<Button>
  button
  <IcoCheck />
</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Button Type</h3>
            <p className="sui-guide__description">
              버튼 동작을 조정할 수 있는 옵션으로, 'button', 'submit', 'reset', 'link' 네 가지 옵션을 제공합니다. <br />
              버튼 타입을 따로 지정하지 않을 경우 기본 버튼 타입은 'button' 입니다. <br />
              'link' 타입은 유일하게 앵커 태그로 렌더링되어, 클릭시 링크 이동을 구현할 수 있습니다.
            </p>
            <div className="sui-guide__content-item">
              <Button type="button">Button</Button>
              <Button type="submit">Submit</Button>
              <Button type="reset">Reset</Button>
              <Button type="link">Link</Button>
              <CodeContainer>
                {`<Button type="button">Button</Button>
<Button type="submit">Submit</Button>
<Button type="reset">Reset</Button>
<Button type="link">Link</Button>`}
              </CodeContainer>
            </div>
            <p className="sui-guide__description">
              <span className="strong">함수 호출</span>
              버튼 타입이 'link'가 아닌 경우, onClick 속성에 함수를 전달하면 버튼 클릭시 함수를 호출할 수 있습니다. <br />
              인라인 함수와 미리 정의된 함수 모두 사용 가능합니다.
            </p>
            <Button onClick={() => alert('onClick 함수 호출')}>Button</Button>
            <CodeContainer>
              {`<Button onClick={() => console.log('onClick 함수 호출')}>Button</Button>
<Button onClick={handleClick}>Button</Button>`}
            </CodeContainer>
            <p className="sui-guide__description">
              <span className="strong">링크 이동</span>
              버튼 타입이 'link'인 경우, href 속성에 링크 주소를 전달하면 버튼 클릭시 링크 이동을 구현할 수 있습니다. <br />
              target 속성을 추가하여 링크 이동 시 새 탭에서 열리도록 설정할 수 있습니다.
            </p>
            <Button type="link" href="https://www.google.com" target="_blank">Google</Button>
            <CodeContainer>
              {`<Button type="link" href="https://www.google.com" target="_blank">Google</Button>`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Button Color</h3>
            <p className="sui-guide__description">
              버튼의 색상을 조정할 수 있는 옵션으로, 'btnColor', 'hoverColor', 'textColor' 세 가지 속성을 수정할 수 있습니다. <br />
              btnColor는 버튼의 기본 색상, hoverColor는 버튼 호버 시 색상, textColor는 버튼 텍스트 색상을 조정할 수 있습니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">btnColor black</p>
              <Button btnColor="#000">Button</Button>
              <p className="sui-guide__content-item-title">hoverColor black</p>
              <Button hoverColor="#000">Button</Button>
              <p className="sui-guide__content-item-title">textColor black</p>
              <Button textColor="#000">Button</Button>
            </div>
            <CodeContainer>
              {`<Button btnColor="#000">Button</Button>
<Button hoverColor="#000">Button</Button>
<Button textColor="#000">Button</Button>`}
            </CodeContainer>
          </div>
          <div className="sui-guide__control">
            <Button
              {...buttonProps}
            >
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