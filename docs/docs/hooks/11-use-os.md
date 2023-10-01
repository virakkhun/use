---
id: use-os
title: useOS
description: useOS is a hook which return os such as `Android | iOS | iPadOS | macOS | Window | ''`,
tags:
  - hook
  - useOS
---

### Definition

- useOS is a hook which return os such as `Android | iOS | iPadOS | macOS | Window | ''`,

### Usage Example

```tsx
import { useOS } from '@virakkhun/react-hooks'

const App = () => {
	const { os } = useOS()

	return <p>{os}</p>
}

export default App
```
