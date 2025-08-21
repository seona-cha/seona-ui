import { StarRating } from '@seona/sui-core'
import { useState } from 'react'
import type { StarRatingProps } from '@seona/sui-core'

function GuideRadio() {
    const [value, setValue] = useState(0)
    const [starRatingProps, setStarRatingProps] = useState({
      rating: 0,
      maxRating: 5,
      readOnly: false,
      starColor: '#6366F1',
      backgroundColor: '#E5E7EB',
      size: 'md',
    } as StarRatingProps)

  
  return (
    <>
    	<div className="sui-page-wrapper">
    		<div className="sui-guide">
    			<h2 className="sui-guide__title">StarRating</h2>
					<div className="sui-guide__control">
                    	<StarRating {...starRatingProps} rating={value} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setValue(Number(e.target.value))} />
    					<div className="sui-guide__control-group">
    						<div>
    							<label>사이즈</label>
    							<select value={starRatingProps.size} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setStarRatingProps({ ...starRatingProps, size: e.target.value as
    								'sm' | 'md' | 'lg' })}>
    								<option value="sm">sm</option>
    								<option value="md">md</option>
    								<option value="lg">lg</option>
    							</select>
    						</div>
    						<div>
    							<label>색상</label>
    							<input type="color" value={starRatingProps.starColor} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setStarRatingProps({ ...starRatingProps, starColor:
    							e.target.value })} />
    						</div>
							<div>
    							<label>배경 색상</label>
    							<input type="color" value={starRatingProps.backgroundColor} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setStarRatingProps({ ...starRatingProps, backgroundColor:
    							e.target.value })} />
    						</div>
    						<div>
    							<label>disabled</label>
    							<input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setStarRatingProps({ ...starRatingProps, disabled: e.target.checked })}
    							/>
    						</div>
    						<div>
    							<label>readOnly</label>
    							<input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setStarRatingProps({ ...starRatingProps, readOnly: e.target.checked })}
    							/>
    						</div>
    						<div>
    							<label>레이블 표시</label>
    							<input type="checkbox" onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setStarRatingProps({ ...starRatingProps, showLabel: e.target.checked
    							})} />
    						</div>
    						<div>
    							<label>레이블 위치</label>
    							<select value={starRatingProps.labelPosition} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=> setStarRatingProps({ ...starRatingProps, labelPosition:
    								e.target.value as 'top' | 'bottom' | 'left' | 'right' })}>
    								<option value="top">top</option>
    								<option value="bottom">bottom</option>
    								<option value="left">left</option>
    								<option value="right">right</option>
    							</select>
    						</div>
    						<div>
    							<label>최대 별점</label>
    							<input type="number" value={starRatingProps.maxRating} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setStarRatingProps({ ...starRatingProps, maxRating: Number(e.target.value) })}
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