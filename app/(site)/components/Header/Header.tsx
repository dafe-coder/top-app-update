import { HeaderProps } from './Header.props'
import cn from 'classnames'
import styles from './Header.module.css'
import { FC } from 'react'

export const Header: FC<HeaderProps> = ({ ...props }): JSX.Element => {
	return <div {...props}>Header</div>
}
