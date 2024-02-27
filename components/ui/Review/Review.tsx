import { ReviewProps } from './Review.props'
import cn from 'classnames'
import styles from './Review.module.css'
import { FC } from 'react'
import ReviewIcon from './review.svg'
import Rating from '../Rating/Rating'
import Par from '../Par/Par'
import Divider from '../Divider/Divider'
import { format } from 'date-fns'

export const Review: FC<ReviewProps> = ({
	className,
	review,
	...props
}: ReviewProps) => {
	return (
		<div className={cn(styles.review, className)} {...props}>
			<div className={styles.reviewHead}>
				<ReviewIcon className={styles.icon} />
				<span className={styles.reviewUserTitle}>
					Василий Раганов: &nbsp;&nbsp;
				</span>
				<Par className={styles.helpText}>Что вас ждет в этом курсе?</Par>
				<div className={styles.date}>
					{format(new Date(review.createdAt), 'dd MMMM yyyy')}
				</div>
				<Rating className={styles.rating} rating={review.rating} />
			</div>
			<Par className={styles.reviewDescription}>{review.description}</Par>
			<Divider />
		</div>
	)
}
