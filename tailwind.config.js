/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,json}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C6294",
        secondary: "#FFC501",
      },
      fontFamily: {
        montserratarm: ["Montserratarm", "sans-serif"],
      },
    },
    screens: {
      big: "1600px",
      desktop: "1350px",
      bmedium: "1080px",
      medium: "1024px",
      btablet: "901px",
      tablet: "801px",
      stablet: "701px",
      phone: "601px",
      small: "551px",
      smal: "401px",
      smaller: "350px",
    },
  },
  plugins: [],
};
