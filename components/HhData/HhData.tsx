import { FC } from 'react'
import Card from '../ui/Card/Card'
import styles from './hhData.module.css'
import { HhDataProps } from './HhData.props'
import RateIcon from './star.svg'
import { priceFix } from '@/helpers/helpers'

const HhData: FC<HhDataProps> = ({
	count,
	juniorSalary,
	middleSalary,
	seniorSalary,
}) => {
	return (
		<div className={styles.hh}>
			<Card className={styles.count}>
				<div className={styles.title}>Всего вакансий</div>
				<span className={styles.countValue}>{count}</span>
			</Card>
			<Card className={styles.salary}>
				<div className={styles.salaryItem}>
					<div className={styles.title}>Начальный</div>
					<span className={styles.salaryValue}>{priceFix(juniorSalary)}</span>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon />
						<RateIcon />
					</div>
				</div>
				<div className={styles.salaryItem}>
					<div className={styles.title}>Средний</div>
					<span className={styles.salaryValue}>{priceFix(middleSalary)}</span>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon />
					</div>
				</div>
				<div className={styles.salaryItem}>
					<div className={styles.title}>Профессионал</div>
					<span className={styles.salaryValue}>{priceFix(seniorSalary)}</span>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
						<RateIcon className={styles.filled} />
					</div>
				</div>
			</Card>
		</div>
	)
}
export default HhData
