---
id: use-language
title: useLanguage
description: useLanguage is a hook use to detect a current languauge is being used as your preference.
tags: 
  - hook
  - useLauguage
---

### Definition

- useLanguage is a hook use to detect a current languauge is being used as your preference.

### Usage Example

```tsx
import { useLanguage } from 'urh-react-hooks'

const App = () => {

  const { lang } = useLangauge()

  return (
    <div>
      { lang }
    </div>
  )
}

export default App
```
