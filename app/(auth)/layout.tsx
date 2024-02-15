import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Login',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): JSX.Element {
	return (
		<html lang='ru'>
			<body>{children}</body>
		</html>
	)
}