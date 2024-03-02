import { HTMLAttributes, DetailedHTMLProps } from 'react'
import { ProductModel } from '@/interfaces/product.interface'

export interface SearchProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products?: ProductModel[]
}
