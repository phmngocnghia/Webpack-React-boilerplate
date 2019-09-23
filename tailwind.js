module.exports = {
  theme: {
    extend: {
      screens: {
        lg: "376px"
      },
      colors: {
        "dark-blue": "hsl(243, 87%, 12%)",
        green: "hsl(163, 95%, 43%)",
        gray: "hsl(0, 0%, 50%)",
        "gray-lighter": "rgb(239, 239, 239)",
        white: "rgb(255,255,255)"
      },
      fontFamily: {
        body: ['"Open Sans"', "sans-serif"],
        heading: ["Raleway", "sans-serif"]
      },
      spacing: {
        // object spacing
        container: "40px",
        icon: "20px",

        // container spacing
        small: "10px",
        medium: "20px",
        big: "30px",
        "super-big": "60px"
      }
    }
  },
  variants: {},
  plugins: []
};
