import cn from 'classnames'
import { AdvantagesItemProps } from './AdvantagesItem.props'
import styles from './AdvantagesItem.module.css'
import CheckIcon from './check.svg'
import Htag from '../ui/Htag/Htag'
import Par from '../ui/Par/Par'

export const AdvantagesItem = ({
	title,
	children,
	className,
	...props
}: AdvantagesItemProps): JSX.Element => {
	return (
		<div className={cn(styles.item, className)} {...props}>
			<div className={styles.left}>
				<div className={styles.circle}>
					<CheckIcon />
				</div>
				<div className={styles.line}></div>
			</div>
			<div className={styles.right}>
				<Htag tag='h3' className={styles.title}>
					{title}
				</Htag>
				<Par size='s'>{children}</Par>
			</div>
		</div>
	)
}
