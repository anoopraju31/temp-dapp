import { Card } from 'flowbite-react'
import { useTexts } from '../hooks'

const AppCard = () => {
	const [data] = useTexts()
	console.log(data)

	return (
		<div className='container px-12 my-10 mx-auto flex flex-wrap gap-4'>
			{data?.map((text, idx) => (
				<Card href='/' key={idx}>
					<h5 className='text-2xl w-[200px] font-bold tracking-tight text-gray-900 dark:text-white'>
						{text}
					</h5>
				</Card>
			))}
		</div>
	)
}

export default AppCard
