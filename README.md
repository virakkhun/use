<p align="center">
  <h2>
    urh-react-hooks - Use React Hook
  </h2>
  <br />
  <span>
    a small simple collections of react hooks
  </span>
</p>

## 📖 Prerequisite

- Latest - [React](https://reactjs.org/) ^18

## 🪝 Install

> with npm:

```bash
npm install urh-react-hooks
```
> with yarn:

```bash
yarn add urh-react-hooks
```

## 💅 Usage

```tsx

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

## ✨ Inspired By

- [vueuse](https://vueuse.org/)
- [usehooks](https://usehooks.com/)

## 🥷

- Written In [TS](https://www.typescriptlang.org/)
- Documented [tsdoc](https://tsdoc.org/)

## 📃 License

[MIT License](https://github.com/vueuse/vueuse/blob/main/LICENSE) © 2022-PRESENT [Virak Khun](https://github.com/virakkhun)
