import { TextareaProps } from './Textarea.props'
import cn from 'classnames'
import styles from './Textarea.module.css'
import { ForwardedRef, forwardRef } from 'react'

export const Textarea = forwardRef(
	(
		{ className, error, ...props }: TextareaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles.wrapTextarea)}>
				<textarea
					ref={ref}
					className={cn(styles.input, {
						[styles.error]: error?.message,
					})}
					{...props}
				/>
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		)
	}
)

Textarea.displayName = 'Textarea'
