import { FC } from 'react'
import { HtagProps } from './Htag.props'
import styles from './Htag.module.css'
import cn from 'classnames'

const Htag: FC<HtagProps> = ({ tag = 'h1', children, className }) => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(styles.h1, className)}>{children}</h1>
		case 'h2':
			return <h2 className={cn(styles.h2, className)}>{children}</h2>
		case 'h3':
			return <h3 className={cn(styles.h3, className)}>{children}</h3>
		default:
			return <></>
	}
}
export default Htag
