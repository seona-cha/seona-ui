import Textarea from '../../components/ui/Textarea'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { useState } from 'react'
import type { InputProps } from '../../types/components'

function GuideTextarea() {
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
  return (
    <>
      <div className="sui-page-wrapper">
        <div className="sui-guide">
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
        </div>
      </div>
    </>
  )
}

export default GuideTextarea