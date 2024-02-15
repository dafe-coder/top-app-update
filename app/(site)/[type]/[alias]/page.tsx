import { getProducts } from '@/api/getProduct'
import { getMenu } from '@/api/menu'
import { getPage } from '@/api/page'
import { MenuItem, PageItem } from '@/interfaces/menu.interface'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FC } from 'react'

export const metadata: Metadata = {
	title: 'Страница',
}

interface Props {
	params: {
		alias: string
	}
}

export const generateStaticParams = async () => {
	const menu = await getMenu(0)
	return menu.flatMap((item: MenuItem) =>
		item.pages.map((page: PageItem) => ({ alias: page.alias }))
	)
}

const PageProducts: FC<Props> = async ({ params }) => {
	const { alias } = params
	const page = await getPage(alias)
	if (!page) {
		notFound()
	}

	const products = await getProducts(page.category)

	return (
		<div>
			{page.title}
			<br />
			{products?.length}
		</div>
	)
}
export default PageProducts
