import React from 'react'
import styles from '../page.module.css'
import Htag from '../../components/ui/Htag/Htag'
import { Button } from '../../components/ui/Button/Button'
import Par from '../../components/ui/Par/Par'
import { Tag } from '../../components/ui/Tag/Tag'
import Rating from '../../components/ui/Rating/Rating'
import { Input } from '@/components/ui/Input/Input'
import { Textarea } from '../../components/ui/Textarea/Textarea'

export default async function Home() {
	return (
		<main className={styles.main}>
			<Htag tag='h1'>Hello wor ld!</Htag>
			<Button appearance='primary'>Primary button</Button>
			<Rating rating={3} />
			<Input placeholder='test' />
			<Textarea placeholder='text' />
			<Par>
				Sed hic accusamus minus ad veniam ab soluta quae quia harum. Alias
				assumenda delectus aut, veritatis, minima dolores veniam dicta incidunt
				nostrum reiciendis voluptate itaque eligendi quis possimus consequatur
				voluptas soluta in consectetur cum aliquam quod officiis neque
				asperiores praesentium. Dicta illum eveniet accusamus. Molestiae
				consequuntur itaque fugit. Natus asperiores impedit officiis quasi
				quidem sunt saepe, quisquam alias voluptate velit! Voluptates natus
				dignissimos similique ab ratione itaque corporis consequuntur labore
				provident, nesciunt recusandae veniam doloribus suscipit aspernatur
				quaerat alias, dolor perferendis aut exercitationem incidunt explicabo
				fuga veritatis? Ad expedita quaerat nihil. Odio deserunt natus, quos
				quas repellendus sed sequi quod. Placeat explicabo hic dolores
				architecto voluptate officia maiores voluptatum repellendus quisquam.
				Autem vero fugiat maiores perferendis dolorum iusto perspiciatis eum
				cumque et voluptatem ea, debitis nulla facere ipsam, itaque corporis
				harum repudiandae corrupti animi? Error porro magnam pariatur molestiae
				quia est illum perspiciatis laudantium fuga quam? Accusantium eos neque
				blanditiis ipsam voluptate perspiciatis ut reiciendis. A odit mollitia
				consequatur nobis, beatae molestiae eos consequuntur enim unde odio
				voluptate maiores incidunt provident earum ratione inventore est,
				doloribus minima suscipit alias! Praesentium eos, obcaecati deserunt non
				iusto nulla exercitationem soluta sunt? Sit magni eligendi aspernatur
				provident, iure consectetur minima quaerat optio mollitia dolores ea
				laborum blanditiis fugit molestias! Minima modi voluptatem qui officia
				obcaecati magnam rerum aperiam! Consequuntur, cupiditate eos!
			</Par>

			<Tag size='m' color='green' href='https://google.com'>
				Hello
			</Tag>
		</main>
	)
}
