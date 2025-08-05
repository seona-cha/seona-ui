import Input from '../../components/ui/Input'
import { useState } from 'react'
import type { InputProps } from '../../types/components'

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