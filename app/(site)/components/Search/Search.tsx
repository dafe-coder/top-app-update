'use client'
import { SearchProps } from './Search.props'
import cn from 'classnames'
import styles from './Search.module.css'
import { Input } from '../../../../components/ui/Input/Input'
import { Button } from '../../../../components/ui/Button/Button'
import SearchIcon from './search.svg'
import { useState } from 'react'
// import { useRouter } from 'next/router'

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [value, setValue] = useState('')
	// const router = useRouter()

	const goToSearch = () => {
		// router.push({
		// 	pathname: '/search',
		// 	query: {
		// 		q: value,
		// 	},
		// })
	}

	const handleKeyDown = (e: React.KeyboardEvent): void => {
		if (e.key == 'Enter') {
			goToSearch()
		}
	}
	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				className={styles.input}
				placeholder='Поиск...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button appearance='primary' className={styles.btn} onClick={goToSearch}>
				<SearchIcon className={styles.icon} />
			</Button>
		</div>
	)
}
