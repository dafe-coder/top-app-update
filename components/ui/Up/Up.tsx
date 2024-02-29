import React, { FC } from 'react'
import cn from 'classnames'
import styles from './Up.module.css'
import ArrowIcon from './arrow.svg'
import { useScrollY } from '@/hooks/useScrollY'
import { useAnimation } from 'framer-motion'
import { motion } from 'framer-motion'

const Up: FC = () => {
	const controls = useAnimation()
	const y = useScrollY()

	React.useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight })
	}, [y, controls])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<motion.div
			animate={controls}
			onClick={scrollToTop}
			initial={{ opacity: 0 }}
			className={cn(styles.up)}
		>
			<ArrowIcon />
		</motion.div>
	)
}
export default Up
