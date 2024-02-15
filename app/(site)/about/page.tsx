import React from 'react'

export default async function Home(): Promise<JSX.Element> {
	await new Promise((res) => setTimeout(() => res(''), 3000))
	return <div>About</div>
}
