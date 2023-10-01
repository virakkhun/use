import React from 'react'
import { UseNetworkConnection } from '../components/use-network-connection'
import { UseIsOnline } from '../components/use-online'
import { UseOS } from '../components/use-os'
import './app.css'

export const App = () => {
	return (
		<div className="container">
			<div className="grid">
				<div>
					<p className="title">useOnline</p>
					<UseIsOnline />
				</div>
				<div>
					<p className="title">useNetworkConnection</p>
					<UseNetworkConnection />
				</div>
				<div>
					<p className="title">useOS</p>
					<UseOS />
				</div>
			</div>
		</div>
	)
}
