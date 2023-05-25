// import { useEffect, useState } from 'react'
// import { useContractRead } from 'wagmi'
// import { abi } from './abis/temp_abi'

// const useTexts = () => {
//     const [texts, setTexts] = useState([])
//     const { data, isError, isLoading } = useContractRead({
//         address: process.env.REACT_APP_ADDRESS,
//         abi: abi,
//         functionName: 'getTexts',
//     })

//     useEffect(() => {
//         setTexts(data)
//     }, [data])
// }

// export default useTexts
