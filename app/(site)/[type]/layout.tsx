import type { Metadata } from 'next'
import '../../globals.css'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Footer } from '../components/Footer/Footer'
import styles from '../layout.module.css'

export const metadata: Metadata = {
	title: 'Courses',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: {
		type: string
	}
}>): JSX.Element {
	const { type } = params

	return (
		<div className={styles.wrap}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} type={type} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	)
}
