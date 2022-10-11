---
id: use-online
title: useOnline
description: useOnline
tags: 
  - hook
  - useOnline
---

### Definition

- useOnline is a hook which return a status whether you are connected to the internet or not.

### Usage Example

```tsx
import { useOnline } from 'urh-react-hooks'

const App = () => {

  const { isOnline } = useOnline()

  return (
    <div>
      { isOnline ? <p>Online</p> : <p>Offline</p> }
    </div>
  )
}

export default App
```
