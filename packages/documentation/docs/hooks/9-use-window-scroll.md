---
id: use-window-scroll
title: useWindowScroll
description: useWindowScroll is a hook which return `ts scrollX`, `ts scrollY` when scrolling.
tags: 
  - hook
  - useWindowScroll
---

### Definition

- useWindowScroll is a hook which return `ts scrollX`, `ts scrollY` when scrolling.

### Usage Example

```tsx
import { useWindowScroll } from 'urh-react-hooks'

const App = () => {

  const { scrollX, scrollY } = useWindowScroll()

  return (
    <div>
      <p>{ scrollX }</p>
      <p>{ scrollY }</p>
    </div>
  )
}

export default App
```
