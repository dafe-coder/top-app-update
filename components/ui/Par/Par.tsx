import { FC } from 'react'
import { PProps } from './Par.props'
import cn from 'classnames'
import styles from './Par.module.css'

const Par: FC<PProps> = ({ children, className, size = 'm' }) => {
	return <p className={cn(styles.par, className, styles[size])}>{children}</p>
}
export default Par
