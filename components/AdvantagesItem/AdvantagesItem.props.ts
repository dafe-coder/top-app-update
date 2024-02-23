import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface AdvantagesItemProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	title: string
}
