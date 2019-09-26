module.exports = {
  theme: {
    extend: {
      screens: {
        xs: { max: "375px" },
        lg: "376px"
      },
      colors: {
        "dark-header": "hsl(217, 28%, 15%)",
        "dark-bg": "hsl(218, 28%, 13%)",
        "dark-footer": "hsl(216, 53%, 9%)",
        "dark-testimotion": "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        white: "white"
      },
      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      },
      spacing: {
        small: "15px",
        medium: "25px",
        big: "50px",
        "super-big": "100px"
      }
    }
  },
  variants: {},
  plugins: []
};
