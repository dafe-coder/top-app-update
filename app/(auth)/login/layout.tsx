export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>): JSX.Element {
	return <div style={{ border: '1px solid green' }}>{children}</div>
}
