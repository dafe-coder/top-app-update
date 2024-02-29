'use clients'
import React, { FC, useRef, useState } from 'react'
import { ProductProps } from './Product.props'
import cn from 'classnames'
import styles from './Product.module.css'
import Card from '../Card/Card'
import Image from 'next/image'
import Rating from '../Rating/Rating'
import { Tag } from '../Tag/Tag'
import { declOfNumber, priceFix } from '@/helpers/helpers'
import { Button } from '../Button/Button'
import Divider from '../Divider/Divider'
import Par from '../Par/Par'
import { Review } from '../Review/Review'
import { ReviewForm } from '../ReviewForm/ReviewForm'

const Product: FC<ProductProps> = ({ product, className, ...props }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const refReview = useRef<HTMLDivElement>(null)

	const scrollToReview = () => {
		setIsOpen(true)
		refReview?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<div className={cn(className)} {...props}>
			<Card className={cn(styles.product, className)}>
				<div className={styles.logo}>
					<Image
						quality={70}
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width='70'
						height='70'
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceFix(product.price)}
					{product.oldPrice && (
						<Tag className={styles.oldPrice} color='green'>
							{priceFix(product.price - product.oldPrice)}
						</Tag>
					)}
				</div>
				<div className={styles.credit}>
					{priceFix(product.credit)}/<span>месяц</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.categories.map((c) => (
						<Tag className={styles.category} key={c} color='ghost'>
							{c}
						</Tag>
					))}
				</div>
				<div className={styles.priceTitle}>Цена</div>
				<div className={styles.creditTitle}>Кредит</div>
				<a href='#ref' onClick={scrollToReview} className={styles.rateTitle}>
					{product.reviewCount}{' '}
					{declOfNumber(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
				</a>
				<Divider className={styles.hr} />
				<div className={styles.description}>
					<Par>{product.description}</Par>
				</div>
				<div className={styles.features}>
					{product.characteristics.map((c) => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots} />
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advTitle}>Преимущества</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<div className={styles.advTitle}>Недостатки</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
				<Divider className={cn(styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance='primary'>Узнать подробнее</Button>
					<Button
						appearance='ghost'
						arrow={isOpen ? 'down' : 'right'}
						onClick={() => setIsOpen(!isOpen)}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<Card
				ref={refReview}
				color='blue'
				className={cn(styles.review, {
					[styles.opened]: isOpen,
					[styles.closed]: !isOpen,
				})}
			>
				{product.reviews.map((r) => (
					<Review key={r._id} review={r} />
				))}
				<ReviewForm productId={product._id} />
			</Card>
		</div>
	)
}
export default Product
