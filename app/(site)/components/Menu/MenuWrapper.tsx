'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Menu.module.css'
import { FC } from 'react'
import { TopLevelCategory } from '@/interfaces/page.interface'
import {
	FirstLevelMenuItem,
	MenuItem,
	PageItem,
} from '@/interfaces/menu.interface'
import cn from 'classnames'
import { usePathname } from 'next/navigation'
import { firstLevelMenu } from '../../../../helpers/helpers'

interface MenuWrapperProps {
	firstCategory: TopLevelCategory
	menu: MenuItem[]
}

const MenuWrapper: FC<MenuWrapperProps> = ({ firstCategory, menu }) => {
	const pathname = usePathname()
	const [isOpened, setIsOpened] = React.useState('')

	const openedSecondCategory = (cat: string) => {
		setIsOpened(cat)
	}

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map((m) => (
					<div key={m.id}>
						<Link href={`/${m.route}`}>
							<div
								className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory,
								})}
							>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map((m) => {
					return (
						<div key={m._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={() => openedSecondCategory(m._id.secondCategory)}
							>
								{m._id.secondCategory}
							</div>
							<div
								className={cn(styles.secondLevelBlock, {
									[styles.secondLevelActive]: isOpened === m._id.secondCategory,
								})}
							>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map((p) => (
			<Link
				href={`/${route}/${p.alias}`}
				key={p._id}
				className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
				})}
			>
				{p.category}
			</Link>
		))
	}

	return buildFirstLevel()
}
export default MenuWrapper
