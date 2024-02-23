import { FC } from 'react'
import { TopPageProps } from './TopPage.interface'
import Htag from '../../../../components/ui/Htag/Htag'
import { Tag } from '../../../../components/ui/Tag/Tag'
import styles from './TopPage.module.css'
import HhData from '@/components/HhData/HhData'
import { TopLevelCategory } from '@/interfaces/page.interface'

const TopPage: FC<TopPageProps> = ({ page, products, firstLevelCategory }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag>{page.title}</Htag>
				{products && (
					<Tag color='grey' size='m'>
						{products.length}
					</Tag>
				)}
				<span>Sort</span>
			</div>
			<div>
				{products?.length &&
					products.map((p) => <div key={p._id}>{p.title}</div>)}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			{firstLevelCategory == TopLevelCategory.Courses && (
				<HhData {...page.hh} />
			)}
		</div>
	)
}
export default TopPage
