import { ProductModel } from '@/interfaces/product.interface'
import { SortEnum } from './Sort.props'

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating }

export interface SortReducerState {
	sort: SortEnum
	products: ProductModel[] | null
}

export const sortReducer = (
	state: SortReducerState,
	action: SortActions
): SortReducerState => {
	switch (action.type) {
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products: state.products
					? state.products.sort((a, b) => (a.price > b.price ? 1 : -1))
					: [],
			}
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products: state.products
					? state.products?.sort((a, b) =>
							a.initialRating > b.initialRating ? -1 : 1
						)
					: [],
			}
		default:
			throw new Error('Error in sorting logic.')
	}
}
