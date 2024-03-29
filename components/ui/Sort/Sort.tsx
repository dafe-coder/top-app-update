import { SortEnum, SortProps } from './Sort.props'
import cn from 'classnames'
import styles from './Sort.module.css'
import SortIcon from './Sort.svg'

export const Sort = ({
	sort,
	setSort,
	className,
	...props
}: SortProps): JSX.Element => {
	return (
		<div className={cn(styles.sort, className)} {...props}>
			<button
				onClick={() => setSort(SortEnum.Rating)}
				className={cn(styles.sortItem, {
					[styles.active]: sort == SortEnum.Rating,
				})}
			>
				<SortIcon className={styles.sortIcon} />
				По рейтингу
			</button>
			<button
				onClick={() => setSort(SortEnum.Price)}
				className={cn(styles.sortItem, {
					[styles.active]: sort == SortEnum.Price,
				})}
			>
				<SortIcon className={styles.sortIcon} />
				По цене
			</button>
		</div>
	)
}
