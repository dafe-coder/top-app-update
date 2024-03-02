import { SidebarProps } from './Sidebar.props'
import cn from 'classnames'
import styles from './Sidebar.module.css'
import { Menu } from '../Menu/Menu'
import Logo from '../logo.svg'
import Link from 'next/link'
import { FC } from 'react'
import { Search } from '../Search/Search'

export const Sidebar: FC<SidebarProps> = ({
	className,
	...props
}): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} {...props}>
			<Link href='/' aria-label='Вернутся домой'>
				<Logo aria-label='Логотип' className={styles.logo} />
			</Link>
			<Search />
			<Menu />
		</div>
	)
}
