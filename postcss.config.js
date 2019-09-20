const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = ({ env }) => {
  const isProduction = env === "production";
  const plugins = [require("tailwindcss"), require("autoprefixer")];

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
