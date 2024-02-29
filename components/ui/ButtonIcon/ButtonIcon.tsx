import { ButtonIconProps, icons } from './ButtonIcon.props'
import cn from 'classnames'
import styles from './ButtonIcon.module.css'

export const ButtonIcon = ({
	appearance,
	className,
	icon,
	...props
}: ButtonIconProps): JSX.Element => {
	const IconComponent = icons[icon]
	return (
		<button
			className={cn(styles.button, className, styles[appearance])}
			{...props}
		>
			<IconComponent />
		</button>
	)
}
