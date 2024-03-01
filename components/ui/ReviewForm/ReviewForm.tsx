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
import { sendReview } from '@/api/sendReview'

export const ReviewForm: FC<ReviewFormProps> = ({
	productId,
	className,
	isOpen,
	...props
}: ReviewFormProps) => {
	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IReviewForm>()
	const [isSuccess, setIsSuccess] = React.useState<boolean>(false)
	const [error, setError] = React.useState<string>()

	const onSubmit = async (data: IReviewForm) => {
		try {
			const res = await sendReview(data, productId)
			if (res) {
				setIsSuccess(true)
				reset()
			} else {
				setError('Что-то пошло не так')
			}
		} catch (err) {
			if (
				typeof err === 'object' &&
				err &&
				'message' in err &&
				typeof err.message === 'string'
			) {
				setError(err.message)
			}
		}
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
					{...register('name', {
						required: { value: true, message: 'Введите Имя' },
					})}
					className={styles.input}
					placeholder='Имя'
					error={errors?.name}
					tabIndex={isOpen ? 0 : -1}
				/>
				<Input
					{...register('title', {
						required: { value: true, message: 'Введите Заголовок' },
					})}
					error={errors.title}
					className={styles.input2}
					placeholder='Заголовок отзыва'
					tabIndex={isOpen ? 0 : -1}
				/>
				<div className={styles.rating}>
					<Par>Оценка</Par>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Choose rating' } }}
						render={({ field }) => (
							<Rating
								error={errors.rating}
								ref={field.ref}
								isEditable
								rating={field.value}
								setRating={field.onChange}
								tabIndex={isOpen ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Textarea
					{...register('description', {
						required: { value: true, message: 'Введите текст' },
						maxLength: {
							value: 280,
							message: 'Максимальная длинна 280 символов!',
						},
					})}
					error={errors.description}
					className={styles.textarea}
					placeholder='Текст отзыва'
					tabIndex={isOpen ? 0 : -1}
				/>
				<Button
					appearance='primary'
					className={styles.btn}
					tabIndex={isOpen ? 0 : -1}
				>
					Отправить
				</Button>
				<Par className={styles.par}>
					* Перед публикацией отзыв пройдет предварительную модерацию и проверку
				</Par>
			</form>
			{isSuccess && (
				<div className={styles.success}>
					<CloseIcon
						className={styles.close}
						onClick={() => setIsSuccess(false)}
					/>
					<div className={styles.successTitle}>Ваш отзыв отправлен!</div>
					<div className={styles.successPar}>
						Спасибо, Ваш отзыв будет опубликован после проверки.
					</div>
				</div>
			)}
			{error && (
				<div className={styles.error}>
					Что-то пошло не так. Попробуйте обновить страницу.
					<CloseIcon
						className={styles.close}
						onClick={() => setError(undefined)}
					/>
				</div>
			)}
		</>
	)
}
