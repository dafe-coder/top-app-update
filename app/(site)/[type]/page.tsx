import { FC } from 'react'
import { firstLevelMenu } from '../components/helpers/helpers'

interface Props {
	params: {
		type: string
	}
}

export const generateStaticParams = async () => {
	return firstLevelMenu.map((m) => ({ type: m.route }))
}

const Page: FC<Props> = ({ params }) => {
	const { type } = params

	return <div>{type}</div>
}
export default Page
