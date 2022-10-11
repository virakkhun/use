---
id: use-accept-only-interger
title: useAcceptOnlyInteger
description: useAcceptOnlyInteger is a hook use to prevent user from input the characters.
tags: 
  - hook
  - useAcceptOnlyInteger
---

### Definition

- useAcceptOnlyInteger is a hook use to prevent user from input the characters.

### Usage Example

```tsx
import { useAcceptOnlyInteger } from 'urh-react-hooks'

const App = () => {

  const { value, setValue, handleKey } = useAcceptOnlyInteger()

  return (
    <div>
      <input 
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
      />
    </div>
  )
}

export default App
```
