# Store

- we group store by domain

# Index.ts

- Each folder belongs to a specific domain. eg: store, components of a specific page should have an index.ts file. This file should export all file belong to its context domain

- Each folder belong to specific domain in root directory should have index.ts file mapped in tsconfig.json for conviniently access, navigate arround code.
  eg: utils/index.ts should mapped @store in tsconfig like:

```
{
  "compilerOptions": {
    "jsx": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@utils*": ["./src/utils/*"]
    }
  }
}
```

This is done automatically using codegen command
