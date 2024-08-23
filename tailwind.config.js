/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        "kampkodetech-cornflower-blue": "#7f6efc",
        plum: "#bdb4fe",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "gray-600": "#475467",
        "gray-900": "#101828",
        "kampkodetech-alto-1": "rgba(217, 217, 217, 0.01)",
        "primary-600": "#7e56d9",
        "primary-200": "#e9d7fe",
        "primary-50": "#f9f5ff",
        "primary-700": "#6941c6",
        "kampkodetech-tolopea": "#1e003d",
        "grays-black": "#000",
      },
      spacing: {},
      fontFamily: {
        "text-lg-semibold": "Inter",
        "kampkodetech-poppins-medium-16": "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      base: "16px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
