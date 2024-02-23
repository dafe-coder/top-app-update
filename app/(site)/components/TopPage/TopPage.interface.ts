import { TopLevelCategory, TopPageModel } from '@/interfaces/page.interface'
import { ProductModel } from '@/interfaces/product.interface'

export interface TopPageProps {
	firstLevelCategory: TopLevelCategory
	page: TopPageModel
	products: ProductModel[] | null
}
