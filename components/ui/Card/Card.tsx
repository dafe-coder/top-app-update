import { FC } from 'react'
import { CardProps } from './Card.props'
import styles from './Card.module.css'
import cn from 'classnames'

const Card: FC<CardProps> = ({
	color = 'white',
	children,
	className,
	...props
}) => {
	return (
		<div className={cn(styles.card, styles[color], className)} {...props}>
			{children}
		</div>
	)
}
export default Card
