'use client'
import { FC } from 'react'
import { TopPageProps } from './TopPage.interface'
import Htag from '../../../../components/ui/Htag/Htag'
import { Tag } from '../../../../components/ui/Tag/Tag'
import styles from './TopPage.module.css'
import HhData from '@/components/HhData/HhData'
import { TopLevelCategory } from '@/interfaces/page.interface'
import { AdvantagesItem } from '@/components/AdvantagesItem/AdvantagesItem'
import { Sort } from '@/components/ui/Sort/Sort'
import { useReducer } from 'react'
import { sortReducer } from '@/components/ui/Sort/sort.reducer'
import { SortEnum } from '@/components/ui/Sort/Sort.props'

const TopPage: FC<TopPageProps> = ({ page, products, firstLevelCategory }) => {
	const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
		sortReducer,
		{
			products,
			sort: SortEnum.Rating,
		}
	)

	const setSort = (sort: SortEnum) => {
		dispatchSort({ type: sort })
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<Htag>{page.title}</Htag>
				{sortedProducts && (
					<Tag color='grey' size='m'>
						{sortedProducts.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={setSort} />
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
			{page.advantages && page.advantages.length > 0 && (
				<div className={styles.advantages}>
					<Htag tag='h3'>Преимущества</Htag>
					<div className={styles.advantagesList}>
						{page.advantages.map((a) => {
							return (
								<AdvantagesItem key={a._id} title={a.title}>
									{a.description}
								</AdvantagesItem>
							)
						})}
					</div>
				</div>
			)}
			{page.seoText && (
				<div
					className={styles.seo}
					dangerouslySetInnerHTML={{ __html: page.seoText }}
				/>
			)}
			<div className={styles.skills}>
				<Htag tag='h3'>Получаемые навыки</Htag>
				<div className={styles.skillsList}>
					{page.tags.map((tag) => {
						return (
							<Tag key={tag} size='m' color='primary'>
								{tag}
							</Tag>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default TopPage
