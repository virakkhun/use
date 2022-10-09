<p align="center">
  <h2>
    urh-react-hooks - Use React Hook
  </h2>
  <br />
  <span>
    a small simple collections of react hooks
  </span>
</p>

## 🪝 Install

> Work with React 18 and above

```bash

npm install urh-react-hooks

or

yarn add urh-react-hooks
```

## 💅 Usage

```ts

import { useOnline } from 'urh-react-hooks'

const App = () => {
  const { isOnline } = useOnline()

  return (
    <>
      <div>
        {  
          isOnline ? 
            <p>Online</p>
            :
            <p>Offile</p>
        }
      </div>
    </>
  )
}

export default App
```

## Inspired By

- [vueuse](https://vueuse.org/)
- [usehooks](https://usehooks.com/)

## 📃 License

[MIT License](https://github.com/vueuse/vueuse/blob/main/LICENSE) © 2022-PRESENT [Virak Khun](https://github.com/virakkhun)
