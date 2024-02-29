import { API } from '@/helpers/api'
import { ProductModel } from '@/interfaces/product.interface'

export async function getProducts(
	category: string
): Promise<ProductModel[] | null> {
	const res = await fetch(API.product.find, {
		method: 'POST',
		body: JSON.stringify({
			category: category,
			limit: 10,
		}),
		headers: new Headers({ 'content-type': 'application/json' }),
	})
	if (!res.ok) {
		return null
	}
	return res.json()
}
