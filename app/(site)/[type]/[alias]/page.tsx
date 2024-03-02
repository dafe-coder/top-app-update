import { getProducts } from '@/api/getProduct'
import { getMenu } from '@/api/menu'
import { getPage } from '@/api/page'
import { MenuItem, PageItem } from '@/interfaces/menu.interface'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import TopPage from '../../components/TopPage/TopPage'

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

export async function generateMetadata({
	params: { alias },
}: Props): Promise<Metadata> {
	const page = await getPage(alias)
	return {
		title: page?.metaTitle || '',
		description: page?.metaDescription || '',
		openGraph: {
			title: page?.metaTitle || '',
			description: page?.metaDescription || '',
			locale: 'ru_RU',
		},
	}
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
			<TopPage firstLevelCategory={0} page={page} products={products} />
		</div>
	)
}
export default PageProducts
