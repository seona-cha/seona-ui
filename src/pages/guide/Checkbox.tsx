import Checkbox from '../../components/ui/Checkbox'
import Input from '../../components/ui/Input'
import { useState } from 'react'
import type { CheckBoxProps } from '../../types/components'

function GuideCheckbox() {

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
      <div className="sui-page-wrapper">
        <div className="sui-guide">
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
                <input type="checkbox" checked={CheckboxProps.checked} onChange={(e) => setCheckboxProps({ ...CheckboxProps, checked: e.target.checked })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideCheckbox