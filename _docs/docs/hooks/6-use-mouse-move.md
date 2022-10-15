---
id: use-mouse-move
title: useMouseMove
description: useMouseMove is a hook which return `ts clientX`, `ts clientY`, `ts pageX`, `ts pageY`
tags: 
  - hook
  - useMouseMove
---

### Definition

- useMouseMove is a hook which return `ts clientX`, `ts clientY`, `ts pageX`, `ts pageY`

### Usage Example

```tsx
import { useMouseMove } from 'urh-react-hooks'

const App = () => {

  const { clientX, clientY, pageX, pageY } = useMouseMove()

  return (
    <div>
      <p>{ clientX }</p>
      <p>{ clientY }</p>
      <p>{ pageX }</p>
      <p>{ pageY }</p>
    </div>
  )
}

export default App
```
