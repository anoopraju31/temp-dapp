export const abi = [
	{
		inputs: [
			{
				internalType: 'string',
				name: '_text',
				type: 'string',
			},
		],
		name: 'addText',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTexts',
		outputs: [
			{
				internalType: 'string[]',
				name: '',
				type: 'string[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'texts',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
]
