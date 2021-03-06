# React Typescript Emotion Tailwind Boilerplate

## Stack

- Babel + Webpack: Instead of TSC. Because babel offer polyfill to support old browsers if needed.
- React: the defacto UI library.
- React-router: the defacto UI library.
- Typescript: the defactor Type-subset for javascript.
- Emotion + Tailwind: Emotion is more lightweight when compared to Styled Component. Tailwind is function CSS framework help you building web application faster.
- @Autogen-export/cli: recursively auto generate export file. I use it in conjunction with a small script to map folder in the src folder to Typescript alias.
- Lint-staged + husky: run linter before commit, test before pushcode, prettier CSS, JSON files...
- SVGR/webpack: automatically turn a SVG file into a React component.
- Lqip-loader + React Ideal Image: provide lower quality image for place-holder purpose

## Commands

```
  "scripts": {
    "dev:gen-index-file": "Run @autogen-export cli in watch mode and webpack-dev-server in HMR mode. If one of those two apps crash, the other one will be crashed too.",
    "dev": "Run webpack-dev-server in HMR mode",
    "dev:open": "Same as yarn dev plus it open your browser and navigate to the address of webpack-dev server",
    "analyze": "Open browser and show webpack production bundle size.",
    "build": "Build app using production mode"
    "test:coverage": "Test all testcases and show test coverage",
    "serve": "Start a webserver and serve the bundle generated by yarn build.",
    "gen:ts-config": "Generate a tsconfig.json file in the root folder that have it compilerOptions.paths mapped to all directories lie in the root folder.",
    "gen:index-file": "Generate index.ts file recursively in src folder using @autoexport-cli",
    "test:one": "Run specific testcases using watch mode. Enter pattern matched your testfile in the quote ''"
  }
```
