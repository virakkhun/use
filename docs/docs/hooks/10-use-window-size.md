---
id: use-window-size
title: useWindowSize
description: useWindowSize is a hook which return `ts height`, `ts widht` when resizing the window.
tags: 
  - hook
  - useWindowSize
---

### Definition

- useWindowSize is a hook which return `ts height`, `ts widht` when resizing the window.

### Usage Example

```tsx
import { useWindowSize } from 'urh-react-hooks'

const App = () => {

  const { height, width } = useWindowSize()

  return (
    <div>
      <p>{ height }</p>
      <p>{ width }</p>
    </div>
  )
}

export default App
```
