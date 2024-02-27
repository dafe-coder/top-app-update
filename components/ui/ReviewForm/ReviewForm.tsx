'use client'
import React from 'react'
import { ReviewFormProps } from './ReviewForm.props'
import cn from 'classnames'
import styles from './ReviewForm.module.css'
import { FC } from 'react'
import { Input } from '../Input/Input'
import { Textarea } from '../Textarea/Textarea'
import { Button } from '../Button/Button'
import Rating from '../Rating/Rating'
import Par from '../Par/Par'
import CloseIcon from './close.svg'
import { useForm } from 'react-hook-form'
import { IReviewForm } from './reviewForm.interface'
import { Controller } from 'react-hook-form'

export const ReviewForm: FC<ReviewFormProps> = ({
	productId,
	className,
	...props
}: ReviewFormProps) => {
	const { control, register, handleSubmit } = useForm<IReviewForm>()

	const onSubmit = (data: IReviewForm) => {
		console.log(data)
	}
	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				action='#'
				method='POST'
				className={cn(styles.form, className)}
				{...props}
			>
				<Input
					defaultValue='test'
					{...register('name')}
					className={styles.input}
					placeholder='Имя'
				/>
				<Input
					{...register('title')}
					className={styles.input2}
					placeholder='Заголовок отзыва'
				/>
				<div className={styles.rating}>
					<Par>Оценка</Par>
					<Controller
						control={control}
						name='rating'
						render={({ field }) => (
							<Rating
								ref={field.ref}
								isEditable
								rating={field.value}
								setRating={field.onChange}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description')}
					className={styles.textarea}
					placeholder='Текст отзыва'
				/>
				<Button appearance='primary' className={styles.btn}>
					Отправить
				</Button>
				<Par className={styles.par}>
					* Перед публикацией отзыв пройдет предварительную модерацию и проверку
				</Par>
			</form>
			<div className={styles.success}>
				<CloseIcon className={styles.close} />
				<div className={styles.successTitle}>Ваш отзыв отправлен!</div>
				<div className={styles.successPar}>
					Спасибо, Ваш отзыв будет опубликован после проверки.
				</div>
			</div>
		</>
	)
}
