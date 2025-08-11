import React from 'react'
import type { StarRatingProps } from '../../../types/components'
import './star-rating.scss'
import IcoStar from '../../../assets/icon/ico-star.svg?react'

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  maxRating = 5,
  readOnly = false,
  starColor = '#6366F1',
  backgroundColor = '#E5E7EB',
  size = 'md',
  customIcon,
  disabled = false,
  showLabel = false,
  labelPosition = 'bottom',
  onChange,
  className,
}) => {
	const classes = [
		'sui-star-rating',
		`sui-star-rating--${size}`,
		`sui-star-rating--label-${labelPosition}`,
		disabled && 'sui-star-rating--disabled',
		readOnly && 'sui-star-rating--read-only',
		className,
	].filter(Boolean).join(' ');

	const styles = {
		'--sui-star-color': starColor,
		'--sui-star-bg-color': backgroundColor,
	} as React.CSSProperties;

	const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

	const handleClick = (index: number) => {
		if (readOnly || disabled) return
		const newRating = index + 1;
		if (newRating > maxRating) return;
		onChange?.(newRating);
	}

  return (
    <div className={classes} style={styles}>
			<div className="sui-star-rating__star-wrapper">
				{Array.from({ length: maxRating }).map((_, index) => {
					const isFilled = index < rating;
					const isHover = hoverIndex !== null && index <= hoverIndex;
					const starClassName = [
						'sui-star-rating__star',
						isFilled && 'sui-star-rating__star--filled',
						isHover && 'sui-star-rating__star--hover',
					].filter(Boolean).join(' ');

					return (
						<div
							key={index}
							className={starClassName}
							onClick={() => handleClick(index)}
							tabIndex={disabled ? -1 : 0}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									handleClick(index)
								}
							}}
							onMouseEnter={() => {
								if (disabled || readOnly) return;
								setHoverIndex(index);
							}}
							onMouseLeave={() => {
								if (disabled || readOnly) return;
								setHoverIndex(null);
							}}
							onFocus={() => {
								if (disabled || readOnly) return;
								setHoverIndex(index);
							}}
							onBlur={() => {
								if (disabled || readOnly) return;
								setHoverIndex(null);
							}}
						>
							{ customIcon || <IcoStar /> }
						</div>
					)
				})}
			</div>
			{showLabel && (
			<div className="sui-star-rating__label">
				{rating} / {maxRating}
			</div>
			)}
    </div>
  )
}

export default StarRating