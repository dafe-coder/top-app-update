'use client'
import React, { FC, KeyboardEvent, forwardRef, useRef } from 'react'
import { RatingProps } from './Rating.props'
import cn from 'classnames'
import styles from './Rating.module.css'
import SvgStar from './star.svg'

const Rating: FC<RatingProps> = forwardRef(
	(
		{
			isEditable = false,
			error,
			rating,
			setRating,
			className,
			tabIndex,
			...props
		},
		ref
	) => {
		const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(
			new Array(5).fill(<></>)
		)

		const ratingRef = useRef<(HTMLSpanElement | null)[]>([])

		const onClick = (i: number) => {
			if (!isEditable || !setRating) return

			setRating(i + 1)
		}

		const onChangeDisplay = (i: number) => {
			if (!isEditable) return

			constructRating(i)
		}

		const handleKey = (e: KeyboardEvent<HTMLSpanElement>): void => {
			if (!isEditable || !setRating) {
				return
			}

			if (e.key == 'ArrowRight' || e.key == 'ArrowUp') {
				if (!rating) {
					setRating(1)
				} else {
					e.preventDefault()
					setRating(rating < 5 ? rating + 1 : 5)
				}
				ratingRef.current[rating]?.focus()
			}
			if (e.key == 'ArrowLeft' || e.key == 'ArrowDown') {
				e.preventDefault()
				setRating(rating > 1 ? rating - 1 : 1)
				ratingRef.current[rating - 2]?.focus()
			}
		}

		const computeFocus = (r: number, i: number): number => {
			if (!isEditable) return -1
			if (!rating && i == 0) return tabIndex ?? 0
			if (r == i + 1) return tabIndex ?? 0
			return -1
		}

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((_, i) => (
				<span
					key={i}
					onClick={() => onClick(i)}
					onMouseEnter={() => onChangeDisplay(i + 1)}
					onMouseLeave={() => onChangeDisplay(rating)}
					tabIndex={computeFocus(rating, i)}
					onKeyDown={handleKey}
					ref={(r) => ratingRef.current?.push(r)}
				>
					<SvgStar
						className={cn(styles.star, {
							[styles.editable]: isEditable,
							[styles.filled]: currentRating > i,
							[styles.error]: error?.message,
						})}
					/>
				</span>
			))
			setRatingArray(updatedArray)
		}

		React.useEffect(() => {
			constructRating(rating)
		}, [rating, error, tabIndex])

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
