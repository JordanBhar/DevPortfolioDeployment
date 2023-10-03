/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary_dark1: "#022B3A",
        primary_dark2: "#1F7A8C",
        primary_dark3: "#BFDBF7",
        secondary: "#FFFFFF",
        secondary_dark: "#E1E5F2",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        title: ['55px' , '55px']
        }
      ,
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      p : "320px", //Phone petite
      xs: "375px", //Phone / Mobile Medium
      ss: "425px", //Phone / Mobile Large
      sm: "768px", //Tablet
      md: "1024px", //Laptop
      lg: "1440px", //Laptop Large
      xl: "2560px", //4k
    },
  },
  plugins: [],
};
