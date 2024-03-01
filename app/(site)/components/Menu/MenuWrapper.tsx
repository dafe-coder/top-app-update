'use client'
import React, { KeyboardEvent } from 'react'
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
import { motion } from 'framer-motion'
interface MenuWrapperProps {
	firstCategory: TopLevelCategory
	menu: MenuItem[]
}

const MenuWrapper: FC<MenuWrapperProps> = ({ firstCategory, menu }) => {
	const pathname = usePathname()
	const [isOpened, setIsOpened] = React.useState('')

	const variants = {
		visible: {
			marginBottom: 20,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
		hidden: {
			marginBottom: 0,
		},
	}

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto',
		},
		hidden: {
			height: 0,
			opacity: 0,
		},
	}

	const openedSecondCategory = (cat: string) => {
		setIsOpened(cat)
	}

	const openSecondLevelKey = (key: KeyboardEvent, cat: string) => {
		if (key.code === 'Enter' || key.code === 'Space') {
			key.preventDefault()
			openedSecondCategory(cat)
		}
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
								tabIndex={0}
								onKeyDown={(key: KeyboardEvent) =>
									openSecondLevelKey(key, m._id.secondCategory)
								}
								className={styles.secondLevel}
								onClick={() => openedSecondCategory(m._id.secondCategory)}
							>
								{m._id.secondCategory}
							</div>
							<motion.div
								layout
								variants={variants}
								initial={
									isOpened == m._id.secondCategory ? 'visible' : 'hidden'
								}
								animate={
									isOpened == m._id.secondCategory ? 'visible' : 'hidden'
								}
								className={cn(styles.secondLevelBlock)}
							>
								{buildThirdLevel(
									m.pages,
									menuItem.route,
									isOpened == m._id.secondCategory ?? false
								)}
							</motion.div>
						</div>
					)
				})}
			</div>
		)
	}

	const buildThirdLevel = (
		pages: PageItem[],
		route: string,
		isOpen: boolean
	) => {
		return pages.map((p) => (
			<motion.div key={p._id} variants={variantsChildren}>
				<Link
					tabIndex={isOpen ? 0 : -1}
					href={`/${route}/${p.alias}`}
					className={cn(styles.thirdLevel, {
						[styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
					})}
				>
					{p.category}
				</Link>
			</motion.div>
		))
	}

	return buildFirstLevel()
}
export default MenuWrapper
