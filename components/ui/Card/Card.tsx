import { FC, forwardRef } from 'react'
import { CardProps } from './Card.props'
import styles from './Card.module.css'
import cn from 'classnames'

const Card: FC<CardProps> = forwardRef(
	({ color = 'white', children, className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(styles.card, styles[color], className)}
				{...props}
			>
				{children}
			</div>
		)
	}
)

Card.displayName = 'Card'

export default Card
