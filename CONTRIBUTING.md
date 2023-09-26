# Contributing

I would like to welcome all the contributions to this project, as contributed by other contributor we can make this project become better.

## Development

### Setup

Please clone this repo to the local machine

Installing deps

> With Yarn

```bash
yarn install
```

> With NPM

```bash
npm install
```

### Documenting

Documeting using [docusaurus](https://docusaurus.io/)
To write a documentation please head into the directory name `docs`.

### New Features

- In this project we use monorepo, for the future updated.
- To start adding a feature heading into `packages/urh-react-hooks` and create a filename base on the feature in `src` directory.
- We will appreciate for request a new feature and make an enchancement to the existing feature.

### Convetion

In the `src` directory will contain all the functions.

```ts
// DO
export const useFunction() {
  ...
}

// DON'T
export default useFunction
```

After that export \* from `useFunction` into the `index.ts`

```ts
export * from './src/useFunction'
```
