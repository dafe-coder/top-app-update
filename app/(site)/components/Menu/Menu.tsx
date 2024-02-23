import React, { FC } from 'react'
import { MenuProps } from './Menu.interface'
import { getMenu } from '@/api/menu'
import styles from './Menu.module.css'
import MenuWrapper from './MenuWrapper'
import { firstLevelMenu } from '../../../../helpers/helpers'
// import { usePathname } from 'next/navigation'

export const Menu: FC<MenuProps> = async ({ ...props }) => {
	// const pathname = usePathname()
	// const firstCategory = firstLevelMenu.find((m) => m.route == pathname.slice(1))
	// const firstCategoryId = firstCategory ? firstCategory.id : 0
	const menu = await getMenu(0)

	return (
		<div {...props} className={styles.menu}>
			<MenuWrapper menu={menu} firstCategory={0} />
		</div>
	)
}
