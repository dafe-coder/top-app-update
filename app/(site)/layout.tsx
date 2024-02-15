import type { Metadata } from 'next'
import '../globals.css'
import { Noto_Sans_KR } from 'next/font/google'
import styles from './layout.module.css'
import cn from 'classnames'

export const metadata: Metadata = {
	title: 'App new',
	description: 'Generated by create next app',
}

const notoSans = Noto_Sans_KR({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): JSX.Element {
	return (
		<html lang='ru'>
			<body className={cn(notoSans.className)}>{children}</body>
		</html>
	)
}