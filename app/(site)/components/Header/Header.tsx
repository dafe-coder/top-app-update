'use client'
import { HeaderProps } from './Header.props'
import cn from 'classnames'
import styles from './Header.module.css'
import { FC, useState, useEffect } from 'react'
import LogoIcon from '../logo.svg'
import { ButtonIcon } from '../../../../components/ui/ButtonIcon/ButtonIcon'
import { motion } from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar'
import Link from 'next/link'

export const Header: FC<HeaderProps> = ({
	className,
	...props
}): JSX.Element => {
	const [isOpened, setIsOpened] = useState<boolean>(false)

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	}

	return (
		<header className={cn(className, styles.header)} {...props}>
			<Link href='/' aria-label='Вернутся домой'>
				<LogoIcon aria-label='Логотип' />
			</Link>
			<ButtonIcon
				appearance='white'
				icon='menu'
				label='Открыть меню'
				onClick={() => setIsOpened(true)}
			/>
			<motion.div
				animate={isOpened ? 'opened' : 'closed'}
				className={styles.mobileMenu}
				variants={variants}
				initial='closed'
			>
				{/* <Sidebar className={styles.sidebar} /> */}
				<ButtonIcon
					onClick={() => setIsOpened(false)}
					className={styles.menuClose}
					label='Закрыть меню'
					appearance='white'
					icon='close'
				/>
			</motion.div>
		</header>
	)
}
