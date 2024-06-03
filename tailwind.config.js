// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



module.exports = {
  mode: "jit",
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_01": "#000000",
          "900_7f_01": "#0000007f",
          "900_33_01": "#00000033",
          "900_3f_01": "#0000003f",
          "900_19_01": "#00000019",
        },
        yellow: { "200_01": "#fde598" },
        gray: {
          "900_00_01": "#16161600",
          "900_02": "#412e15",
          "900_03": "#191d2a",
          "500_19_01": "#a1a1a119",
          "900_00": "#16161600",
          "700_02": "#696969",
          "700_03": "#8b544c",
          "500_19": "#a1a1a119",
          "700_01": "#696969",
        },
        deep_orange: { A100_01: "#f09a83", "200_01": "#e6be9f" },
        red: { A200_01: "#ff5454", A201:"#ff5555", A200: "#ff5454", "200_01": "#f49291", A700_01: "#ff0000" },
        blue_gray: { 400: "#81838a", "400_03": "#888b92", "400_02": "#81838a" },
        white: { A700_01: "#ffffff", A700: "#ffffff" },
      },
      boxShadow: {
        xs: "48px 48px 100px 0 #00000033",
        sm: "0 4px 4px 0 #0000003f",
        md: "-13.01px 13.01px 104px 0 #a1a1a119",
        lg: "4px 4px 40px 0 #00000019",
      },
      opacity: { 0.5: 0.5, 0.51: 0.51 },
      fontFamily: {
        dmsans: "DM Sans",
        nunitosans: "Nunito Sans",
        plusjakartasans: "Plus Jakarta Sans",
        clashdisplay: "Clash Display",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
