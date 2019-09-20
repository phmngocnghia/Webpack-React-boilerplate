const fs = require("fs");
const path = require("path");

try {
  const srcPath = path.resolve(__dirname, "../src");
  const tsConfigFilePath = path.resolve(__dirname, "../tsconfig.json");
  const tsConfigsBuffer = fs.readFileSync(tsConfigFilePath);
  const tsConfigs = JSON.parse(tsConfigsBuffer.toString());
  const objs = fs.readdirSync(srcPath);
  const directoryNames = objs
    .map(obj => path.resolve(srcPath, obj))
    .filter(objPaths => fs.statSync(objPaths).isDirectory())
    .map(directoryPaths => path.basename(directoryPaths));

  const paths = {};
  for (let directoryName of directoryNames) {
    paths[`@${directoryName}`] = [`./src/${directoryName}`];
    paths[`@${directoryName}/*`] = [`./src/${directoryName}/*`];
  }
  paths["@/*"] = [`./src/*`];

  tsConfigs.compilerOptions.paths = paths;
  const tsConfigsToString = JSON.stringify(tsConfigs, null, 2);
  fs.writeFileSync(tsConfigFilePath, tsConfigsToString);
  console.log("successfully re-generated tsconfig.json");
} catch (err) {
  throw err;
}
