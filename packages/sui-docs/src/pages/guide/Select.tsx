import { Select, Input, Button } from '@seona/sui-core'
import { useState } from 'react'
import type { SelectProps } from '@seona/sui-core'

function GuideSelect() {
    const [selectValue, setSelectValue] = useState('')
    const [selectProps, setSelectProps] = useState({
      options: [
        { label: 'option 1', value: 'option1' },
        { label: 'option 2', value: 'option2' },
        { label: 'option 3', value: 'option3' },
        { label: 'option 4', value: 'option4' },
        { label: 'option 5', value: 'option5' },
      ],
      value: selectValue,
      setValue: (value: string) => {
        setSelectValue(value)
      },
      placeholder: '옵션 선택',
      size: 'md',
      width: '',
      variant: 'filled',
      color: '#6366F1',
      fullWidth: false,
      disabled: false,
      onChange: () => {
        console.log('change')
      },
    } as SelectProps)
  return (
    <>
      <div className="sui-page-wrapper">
        <div className="sui-guide">
        <h2 className="sui-guide__title">Select</h2>
          <div className="sui-guide__control">
              <Select
                {...selectProps}
                value={selectValue}
                setValue={setSelectValue}
                onChange={() => {console.log('change')}}
              />
              <Button
                size="sm"
                variant="text"
                onClick={() => {
                  setSelectValue('')
                }}
              >
                value reset
              </Button>
            <div className="sui-guide__control-group">
              <div>
                <label>모양</label>
                <select value={selectProps.variant} onChange={(e) => setSelectProps({ ...selectProps, variant: e.target.value as 'filled' | 'outlined' | 'underline' })}>
                  <option value="filled">filled</option>
                  <option value="outlined">outlined</option>
                  <option value="underline">underline</option>
                </select>
              </div>
              <div>
                <label>사이즈</label>
                <select value={selectProps.size} onChange={(e) => setSelectProps({ ...selectProps, size: e.target.value as 'sm' | 'md' | 'lg' })}>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                </select>
              </div>
              <div>
                <label>placeholder</label>
                <Input
                  name="select-placeholder"
                  id="select-placeholder"
                  type="text"
                  value={selectProps.placeholder}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectProps({ ...selectProps, placeholder: e.target.value })}
                />
              </div>
              <div>
                <label>너비</label>
                <Input
                  name="select-width"
                  id="select-width"
                  type="number"
                  size="md"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectProps({ ...selectProps, width: e.target.value + 'px' as `${number}px` })}
                  value={selectProps.width?.replace('px', '') || ''}
                />
              </div>
              <div>
                <label>색상</label>
                <input type="color" value={selectProps.color} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectProps({ ...selectProps, color: e.target.value })} />
              </div>
              <div>
                <label>비활성화</label>
                <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectProps({ ...selectProps, disabled: e.target.checked })} />
              </div>
              <div>
                <label>Full Width</label>
                <input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectProps({ ...selectProps, fullWidth: e.target.checked })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideSelect