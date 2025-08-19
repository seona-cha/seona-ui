import Input from '../../components/ui/Input'
import { useState } from 'react'
import type { InputProps } from '../../types/components'
import CodeContainer from '../../components/ui/CodeContainer'

function GuideInput() {
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

  return (
    <>
      <div className="sui-page-wrapper">
        <div className="sui-guide">
          <h2 className="sui-guide__title">Input</h2>
          <p className="sui-guide__description">
            인풋 컴포넌트는 사용자 입력을 받는 컴포넌트입니다. <br />
            텍스트, 숫자, 이메일, 비밀번호 등 다양한 타입의 입력을 지원합니다.
          </p>
          <div className="sui-guide__content">
            <h3 className="sui-guide__subtitle">Type Option</h3>
            <p className="sui-guide__description">
              인풋의 타입을 조정할 수 있는 옵션으로, 'text', 'number', 'email', 'password' 네 가지 옵션을 제공합니다. <br />
              타입 옵션을 따로 지정하지 않을 경우 기본 인풋 타입은 'text' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">text</p>
              <Input type="text" name="input-type-text" id="input-type-text" />
              <p className="sui-guide__content-item-title">number</p>
              <Input type="number" name="input-type-number" id="input-type-number" />
              <p className="sui-guide__content-item-title">email</p>
              <Input type="email" name="input-type-email" id="input-type-email" />
              <p className="sui-guide__content-item-title">password</p>
              <Input type="password" name="input-type-password" id="input-type-password" />
            </div>
            <CodeContainer>
              {`<Input type="text" name="input-type-text" id="input-type-text" />
<Input type="number" name="input-type-number" id="input-type-number" />
<Input type="email" name="input-type-email" id="input-type-email" />
<Input type="password" name="input-type-password" id="input-type-password" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Variant Option</h3>
            <p className="sui-guide__description">
              인풋의 모양을 조정할 수 있는 옵션으로, 'filled', 'outlined', 'underline' 세 가지 옵션을 제공합니다. <br />
              모양 옵션을 따로 지정하지 않을 경우 기본 인풋 모양은 'filled' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">filled</p>
              <Input variant="filled" name="input-variant-filled" id="input-variant-filled" />
              <p className="sui-guide__content-item-title">outlined</p>
              <Input variant="outlined" name="input-variant-outlined" id="input-variant-outlined" />
              <p className="sui-guide__content-item-title">underline</p>
              <Input variant="underline" name="input-variant-underline" id="input-variant-underline" />
            </div>
            <CodeContainer>
              {`<Input variant="filled" name="input-variant-filled" id="input-variant-filled" />
<Input variant="outlined" name="input-variant-outlined" id="input-variant-outlined" />
<Input variant="underline" name="input-variant-underline" id="input-variant-underline" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Size Option</h3>
            <p className="sui-guide__description">
              인풋의 크기를 조정할 수 있는 옵션으로, 'sm', 'md', 'lg' 세 가지 옵션을 제공합니다. <br />
              사이즈 옵션을 따로 지정하지 않을 경우 기본 인풋 크기는 'md' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">sm</p>
              <Input size="sm" name="input-size-sm" id="input-size-sm" />
              <p className="sui-guide__content-item-title">md</p>
              <Input size="md" name="input-size-md" id="input-size-md" />
              <p className="sui-guide__content-item-title">lg</p>
              <Input size="lg" name="input-size-lg" id="input-size-lg" />
            </div>
            <CodeContainer> 
              {`<Input size="sm" name="input-size-sm" id="input-size-sm" />
<Input size="md" name="input-size-md" id="input-size-md" />
<Input size="lg" name="input-size-lg" id="input-size-lg" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Radius Option</h3>  
            <p className="sui-guide__description">
              인풋의 Radius를 조정할 수 있는 옵션으로, '24px' 또는 '24px 0px 0px 24px'와 같이 문자열로 입력하여 Radius 값을 조정할 수 있습니다. <br />
              따로 옵션값을 입력하지 않을 경우 기본 인풋 Radius는 0px입니다.
            </p>
            <div className="sui-guide__content-item">
              <Input type="text" name="input-radius" id="input-radius" value={InputProps.radius} onChange={(e) => setInputProps({ ...InputProps, radius: e.target.value as `${number}px` })} />
              <input type="range" min="0" max="24" onChange={(e) => setInputProps({ ...InputProps, radius: e.target.value + 'px' as `${number}px` })} />
              <p className="sui-guide__content-item-title">Radius: {InputProps.radius}(조정해 보세요!)</p>
              <Input type="text" variant="outlined" name="input-radius-example" id="input-radius-example" value={InputProps.radius} radius={InputProps.radius} />
            </div>
            <CodeContainer>
              {`<Input type="text" name="input-radius-example" id="input-radius-example" radius="${InputProps.radius}" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Disabled Option</h3>
            <p className="sui-guide__description">
              인풋의 비활성화 옵션을 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              비활성화 옵션을 따로 지정하지 않을 경우 기본 인풋 비활성화 옵션은 'false' 입니다.
            </p>
            <CodeContainer>
              {`<Input type="text" name="input-disabled" id="input-disabled" disabled />
<Input type="text" name="input-disabled" id="input-disabled" />`}
            </CodeContainer>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Input type="text" name="input-disabled" id="input-disabled" disabled />
              <p className="sui-guide__content-item-title">False (기본값)</p>
              <Input type="text" name="input-disabled" id="input-disabled" />
            </div>
            <h3 className="sui-guide__subtitle">Full Width Option</h3>
            <p className="sui-guide__description">
              인풋의 전체 너비를 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              전체 너비 옵션을 따로 지정하지 않을 경우 기본 인풋 전체 너비 옵션은 'false' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Input type="text" name="input-full-width" id="input-full-width" fullWidth />
              <p className="sui-guide__content-item-title">False (기본값)</p>
              <Input type="text" name="input-full-width" id="input-full-width" />
            </div>
            <CodeContainer>
              {`<Input type="text" name="input-full-width" id="input-full-width" fullWidth />
<Input type="text" name="input-full-width" id="input-full-width" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Hidden Label Option</h3>
            <p className="sui-guide__description">
              인풋의 숨김 라벨을 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              숨김 라벨 옵션을 따로 지정하지 않을 경우 기본 인풋 숨김 라벨 옵션은 'false' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Input type="text" name="input-hidden-label" id="input-hidden-label" hiddenLabel="숨겨진 라벨" />
              <p className="sui-guide__content-item-title">False (기본값)</p>
              <Input type="text" name="input-no-hidden-label" id="input-no-hidden-label" />
            </div>
            <CodeContainer>
              {`<Input type="text" name="input-hidden-label" id="input-hidden-label" hiddenLabel="숨겨진 라벨" />
<Input type="text" name="input-hidden-label" id="input-hidden-label" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Placeholder Option</h3>
            <p className="sui-guide__description">
              인풋의 플레이스홀더를 조정할 수 있는 옵션으로, 'true', 'false' 두 가지 옵션을 제공합니다. <br />
              플레이스홀더 옵션을 따로 지정하지 않을 경우 기본 인풋 플레이스홀더 옵션은 'false' 입니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Input type="text" name="input-placeholder" id="input-placeholder" placeholder="placeholder" />
              <p className="sui-guide__content-item-title">False (기본값)</p>
              <Input type="text" name="input-placeholder" id="input-placeholder" />
            </div>
            <CodeContainer>
              {`<Input type="text" name="input-placeholder" id="input-placeholder" placeholder="placeholder" />
<Input type="text" name="input-placeholder" id="input-placeholder" />`}
            </CodeContainer>
            <h3 className="sui-guide__subtitle">Error Option</h3>
            <p className="sui-guide__description">
              인풋의 에러 상태를 체크할 수 있는 옵션으로, 상위 컴포넌트에서 Input 컴포넌트의 에러 상태를 조정할 수 있도록 Boolean 타입으로 지원합니다. <br />
              errorMessage 옵션을 추가하여 에러 메시지를 지정할 수 있습니다.
            </p>
            <div className="sui-guide__content-item">
              <p className="sui-guide__content-item-title">True</p>
              <Input type="text" name="input-error" id="input-error" error errorMessage="정보가 일치하지 않습니다." />
              <p className="sui-guide__content-item-title">False (기본값)</p>
              <Input type="text" name="input-error" id="input-error" />
            </div>
            <CodeContainer>
              {`<Input type="text" name="input-error" id="input-error" error errorMessage="정보가 일치하지 않습니다." />
<Input type="text" name="input-error" id="input-error" />`}
            </CodeContainer>
          </div>
          <div className="sui-guide__control">
            <Input
              {...InputProps}
              onChange={(e) => setInputProps({ ...InputProps, value: e.target.value })}
              onBlur={(e) => {
                console.log(e.target.value)
                if (e.target.value !== '가나다라') {
                  setInputProps({ ...InputProps, error: true, errorMessage: '가나다라 라고 입력해주세요.' })
                } else {
                  setInputProps({ ...InputProps, error: false, errorMessage: '' })
                }
              }}
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
        </div>
      </div>
    </>
  )
}

export default GuideInput