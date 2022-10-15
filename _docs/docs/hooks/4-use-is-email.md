---
id: use-is-email
title: useIsEmail
description: useIsEmail is a hook which return true if the value that give match email regex pattern.
tags: 
  - hook
  - useIsEmail
---

### Definition

- useIsEmail is a hook which return true if the value that give match email regex pattern.

### Usage Example

```tsx
import { useIsEmail } from 'urh-react-hooks'

const App = () => {

  const [email, setEmail] = useState<string>('')
  const { isEmail, checkIfEmail } = useIsEmail(email)


  return (
    <div>
      <input 
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={checkIfEmail}
      />
    </div>
  )
}

export default App
```
