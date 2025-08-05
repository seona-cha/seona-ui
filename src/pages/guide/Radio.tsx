import Radio from '../../components/ui/Radio'
import { useState } from 'react'
import type { RadioProps } from '../../types/components'

function GuideRadio() {
    const [radioValue, setRadioValue] = useState('option1')
    const [radioProps, setRadioProps] = useState({
      name: 'radio',
      size: 'md',
      hiddenLabel: false,
      variant: 'circle',
      options: [],
      color: '#6366F1',
    } as RadioProps)

  
  return (
    <>
    	<div className="sui-page-wrapper">
    		<div className="sui-guide">
    			<h2 className="sui-guide__title">Radio</h2>
    			<div className="sui-guide__control">
    				<p>선택된 값:{radioValue}</p>
    				<Radio {...radioProps} onChange={(e)=> setRadioValue(e.target.value)}
    					options={[
								{ label: 'option1', value: 'option1', disabled: false },
								{ label: 'option2', value: 'option2', disabled: true },
								{ label: 'option3', value: 'option3', disabled: false },
								{ label: 'option4', value: 'option4', disabled: false },
								{ label: 'option5', value: 'option5', disabled: false },
    					]}
    					/>
    					<div className="sui-guide__control-group">
    						<div>
    							<label>사이즈</label>
    							<select value={radioProps.size} onChange={(e)=> setRadioProps({ ...radioProps, size: e.target.value as
    								'sm' | 'md' | 'lg' })}>
    								<option value="sm">sm</option>
    								<option value="md">md</option>
    								<option value="lg">lg</option>
    							</select>
    						</div>
    						<div>
    							<label>모양</label>
    							<select value={radioProps.variant} onChange={(e)=> setRadioProps({ ...radioProps, variant:
    								e.target.value as 'square' | 'circle' })}>
    								<option value="circle">circle</option>
    								<option value="square">square</option>
    							</select>
    						</div>
    						<div>
    							<label>방향</label>
    							<select value={radioProps.direction} onChange={(e)=> setRadioProps({ ...radioProps, direction:
    								e.target.value as 'horizontal' | 'vertical' })}>
    								<option value="horizontal">horizontal</option>
    								<option value="vertical">vertical</option>
    							</select>
    						</div>
    						<div>
    							<label>색상</label>
    							<input type="color" value={radioProps.color} onChange={(e)=> setRadioProps({ ...radioProps, color:
    							e.target.value })} />
    						</div>
    						<div>
    							<label>레이블 숨김</label>
    							<input type="checkbox" onChange={(e)=> setRadioProps({ ...radioProps, hiddenLabel: e.target.checked
    							})} />
    						</div>
    						<div>
    							<label>Full Width</label>
    							<input type="checkbox" onChange={(e)=> setRadioProps({ ...radioProps, fullWidth: e.target.checked })}
    							/>
    						</div>
    					</div>
    			</div>
    		</div>
    	</div>
    </>
  )
}

export default GuideRadio