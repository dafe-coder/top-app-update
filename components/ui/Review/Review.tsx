import { ReviewProps } from './Review.props'
import cn from 'classnames'
import styles from './Tag.module.css'
import { FC } from 'react'

export const Review: FC<ReviewProps> = ({
	className,
	review,
	...props
}: ReviewProps) => {
	return <div className={cn(styles.review, className)} {...props}></div>
}
