import { IReviewForm } from '@/components/ui/ReviewForm/reviewForm.interface'
import { API } from '@/helpers/api'

export interface IReviewFormResponse {
	message: string
}

export const sendReview = async (
	formData: IReviewForm,
	productId: string
): Promise<IReviewFormResponse | null> => {
	console.log(JSON.stringify({ ...formData, productId }))

	const res = await fetch(API.review.createDemo, {
		body: JSON.stringify({ ...formData, productId }),
		headers: new Headers({ 'content-type': 'application/json' }),
		method: 'POST',
	})
	if (!res.ok) {
		return null
	}
	return res.json()
}
