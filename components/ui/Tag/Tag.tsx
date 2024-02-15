import { TagProps } from './Tag.props'
import cn from 'classnames'
import styles from './Tag.module.css'
import { FC } from 'react'

export const Tag: FC<TagProps> = ({
	children,
	size = 's',
	color = 'primary',
	className,
	href,
	...props
}: TagProps) => {
	return (
		<div
			className={cn(styles.tag, className, styles[size], styles[color])}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
