import { useContractRead } from 'wagmi'
import { abi } from '../abis/temp_abi'

const useTexts = () => {
	const { data } = useContractRead({
		address: '0x6EeA57Cb6BD4a96eB4EdF18C652a43fCF6086F1d',
		abi: abi,
		functionName: 'getTexts',
	})

	return [data]
}

export default useTexts
