---
id: use-network-connection
title: useNetworkConnection
description: useNetworkConnection is a hook which return network type, downlink, rtt, saveData
tags: 
  - hook
  - useNetworkConnection
---

### Definition

- useNetworkConnection is a hook which return network type, downlink, rtt, saveData.

### Usage Example

```tsx
import { useNetworkConnection } from 'urh-react-hooks'

const App = () => {

  const { network } = useNetworkConnection()

  return (
    <div>
      <p>{network?.downlink}</p>
      <p>{network?.effectiveType}</p>
      <p>{network?.rtt}</p>
      <p>{network?.saveData}</p>
    </div>
  )
}

export default App
```
