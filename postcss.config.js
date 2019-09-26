/*eslint-disable-next-line @typescript-eslint/no-var-requires*/
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({ env }) => {
  const isProduction = env === "production";
  const plugins = [
    require("autoprefixer"),
    require("tailwindcss")("./tailwind.js"),
    require("postcss-nested")
  ];

  if (isProduction) {
    plugins.push(
      require("cssnano")({
        preset: "default"
      }),
      purgecss({
        content: ["./public/*.js"]
      })
    );
  }

  return {
    plugins
  };
};
