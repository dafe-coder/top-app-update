'use client'
import React, { FC, KeyboardEvent, forwardRef } from 'react'
import { RatingProps } from './Rating.props'
import cn from 'classnames'
import styles from './Rating.module.css'
import SvgStar from './star.svg'

const Rating: FC<RatingProps> = forwardRef(
	(
		{ isEditable = false, error, rating, setRating, className, ...props },
		ref
	) => {
		const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		)

		const onClick = (i: number) => {
			if (!isEditable || !setRating) return

			setRating(i + 1)
		}

		const onChangeDisplay = (i: number) => {
			if (!isEditable) return

			constructRating(i)
		}

		const handleSpace = (i: number, e: KeyboardEvent<SVGElement>): void => {
			if (e.code !== 'Space' || !setRating) {
				return
			}
			setRating(i + 1)
		}

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((_, i) => (
				<span
					key={i}
					onClick={() => onClick(i)}
					onMouseEnter={() => onChangeDisplay(i + 1)}
					onMouseLeave={() => onChangeDisplay(rating)}
				>
					<SvgStar
						className={cn(styles.star, {
							[styles.editable]: isEditable,
							[styles.filled]: currentRating > i,
							[styles.error]: error?.message,
						})}
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(i, e)}
					/>
				</span>
			))
			setRatingArray(updatedArray)
		}

		React.useEffect(() => {
			constructRating(rating)
		}, [rating, error])

		return (
			<div {...props} ref={ref} className={cn(styles.rating, className)}>
				{ratingArray.map((r, i) => (
					<React.Fragment key={i}>{r}</React.Fragment>
				))}
			</div>
		)
	}
)

Rating.displayName = 'Rating'

export default Rating
