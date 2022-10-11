---
id: user-intersect
title: useIntersectionObserver
description: useIntersectionObserver is an intersection function which trigger when it reach the targets.
tags: 
  - hook
  - useIntersectionObserver
---

### Definition

- useIntersectionObserver is an intersection function which trigger when it reach the targets.

### Usage Example

```tsx
import { useIntersectionObserver } from 'urh-react-hooks'

const App = () => {

  useIntersectionObserver({
    target: '.target',
    className: 'popUp' // CSS class which trigger when the target intersect
  })

  return (
    <div>
      <div className="target">
        I pop up
      </div>
    </div>
  )
}

export default App
```
