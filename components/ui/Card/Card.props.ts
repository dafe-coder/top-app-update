import {
	DetailedHTMLProps,
	ForwardedRef,
	HTMLAttributes,
	ReactNode,
} from 'react'

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color?: 'white' | 'blue'
	children: ReactNode
	ref?: ForwardedRef<HTMLDivElement>
}
