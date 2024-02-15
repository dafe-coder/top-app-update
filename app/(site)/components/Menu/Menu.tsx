import { FC } from 'react'
import { MenuProps } from './Menu.interface'
import { getMenu } from '@/api/menu'
import styles from './Menu.module.css'
import MenuWrapper from './MenuWrapper'
import { firstLevelMenu } from '../helpers/helpers'

export const Menu: FC<MenuProps> = async ({ type, ...props }) => {
	const firstCategory = firstLevelMenu.find((m) => m.route == type)
	const firstCategoryId = firstCategory ? firstCategory.id : 0
	const menu = await getMenu(firstCategoryId)

	return (
		<div {...props} className={styles.menu}>
			<MenuWrapper menu={menu} firstCategory={firstCategoryId} />
		</div>
	)
}
