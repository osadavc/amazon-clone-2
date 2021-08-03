module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      transitionProperty: {
        "translate-shadow": "transform, shadow",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
    },
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      right: "right",
      top: "top",
      mainBanner: "center right -492px",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
