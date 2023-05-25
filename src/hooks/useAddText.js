import { useContractWrite } from 'wagmi'
import { abi } from '../abis/temp_abi'

const useAddTexts = () => {
	const { write } = useContractWrite({
		address: '0x6EeA57Cb6BD4a96eB4EdF18C652a43fCF6086F1d',
		abi: abi,
		functionName: 'addText',
	})

	return [write]
}

export default useAddTexts
