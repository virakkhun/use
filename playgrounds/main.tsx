import React from 'react'
import ReactDOM from 'react-dom/client'
import { UseNetworkConnection } from './components/use-network-connection'
import { UseIsOnline } from './components/use-online'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<p>useOnline</p>
		<UseIsOnline />
		<br />
		<p>useNetworkConnection</p>
		<UseNetworkConnection />
	</React.StrictMode>,
)
