import { HTMLAttributes, HtmlHTMLAttributes, ReactNode } from 'react'
import { DetailedHTMLProps } from 'react'

export interface TagProps
	extends DetailedHTMLProps<
		HtmlHTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	size?: 's' | 'm'
	children: ReactNode
	color?: 'ghost' | 'grey' | 'green' | 'primary' | 'red'
	href?: string
}
