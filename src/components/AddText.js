import { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'

import { useAddText } from '../hooks'
import { useAccount } from 'wagmi'

const AddText = () => {
	const [text, setText] = useState('')
	const { isDisconnected } = useAccount()
	const [write] = useAddText()

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		write({
			args: [text],
		})
		setText('')
	}

	if (!isDisconnected)
		return (
			<div className='my-10 mx-auto w-6/12 flex flex-col gap-4'>
				<div>
					<div className='mb-2 block'>
						<Label htmlFor='text' value='Your Text' />
					</div>
					<TextInput
						id='text'
						type='text'
						value={text}
						onChange={handleChange}
						required={true}
					/>
				</div>
				<Button type='submit' onClick={handleSubmit}>
					Add Text{' '}
				</Button>
			</div>
		)
}

export default AddText
