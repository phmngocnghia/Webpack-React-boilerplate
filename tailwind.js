module.exports = {
  theme: {
    extend: {
      screens: {
        xs: { max: "375px" },
        lg: "376px"
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "dark-cyan": "hsl(192, 100%, 9%)",
        "pale-blue": "hsl(207, 100%, 98%)",
        gray: "rgb(143, 147, 150)"
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"]
      },
      spacing: {
        container: "100px",
        "container-mobile": "25px",
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
