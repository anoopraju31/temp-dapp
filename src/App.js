import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { AddText, Card, Navbar } from './components'

const { chains, publicClient } = configureChains(
	[sepolia],
	[
		alchemyProvider({ apiKey: 'Ez3aENYMC4RoY3eM5RMt6ia90kL2ehBk' }),
		publicProvider(),
	],
)
const { connectors } = getDefaultWallets({
	appName: 'tEMP aPP',
	projectId: 'YOUR_PROJECT_ID',
	chains,
})
const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
})

export const App = () => {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
				<div className='container mx-auto'>
					<Navbar />
					<AddText />
					<div className='flex gap-4'>
						<Card />
					</div>
				</div>
			</RainbowKitProvider>
		</WagmiConfig>
	)
}
