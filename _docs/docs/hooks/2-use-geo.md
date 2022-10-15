---
id: use-geo
title: useGeolocation
description: useGeolocation is a hook which return location information.
tags: 
  - hook
  - useGeolocation
---

### Definition

- useGeolocation is a hook which return location information.

### Usage Example

```tsx
import { useGeolocation } from 'urh-react-hooks'

const App = () => {

  const { coords, errors } = useGeolocation()

  return (
    <div>
      <p>
        {JSON.stringify(coords, null, 2)}
      </p>
      <br />
      <p>
        {JSON.stringify(errors, null, 2)}
      </p>
    </div>
  )
}

export default App
```
