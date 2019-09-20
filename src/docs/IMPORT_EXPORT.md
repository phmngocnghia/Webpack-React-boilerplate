# Don't

- Export default in javascript files in src folder

# Do

- Group package import and local import into block and split them by oneline. eg:

```js
import * as fs from "fs";
import * as path from "path";

import { IsObjectADirectoryInput } from "@types";
```
