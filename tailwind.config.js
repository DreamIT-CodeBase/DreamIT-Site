/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      margin: {
        17: "70px",
        19: "74px",
        21: "64px",
        "68px": "68px",
        "105px": "105px",
      },
      fontWeight: {
        500: "500",
        400: "400",
        600: "600",
        bold: "700",
      },
      spacing: {
        19: "74px",
      },
      width: {
        23: "90px",
        79: "315px",
        "38px": "38px",
        "595px": "595px",
      },

      lineHeight: {
        11: "42px",
        14: "54px",
        15: "60px",
        16: "64px",
        18: "72px",
        51: "51px",
        56: "56px",
      },
      fontSize: {
        13: [
          "13px",
          {
            lineHeight: "15.6px",
            fontWeight: "500",
          },
        ],
        14: [
          "14px",
          {
            lineHeight: "20.84px",
            fontWeight: "500",
          },
        ],
        16: [
          "16px",
          {
            lineHeight: "20.84px",
            fontWeight: "500",
          },
        ],
        18: [
          "18px",
          {
            lineHeight: "23.44px",
            fontWeight: "500",
          },
        ],
        20: [
          "20px",
          {
            lineHeight: "26.04px",
            fontWeight: "500",
          },
        ],
        22: [
          "18px",
          {
            lineHeight: "29.47px",
            fontWeight: "600",
          },
        ],
        24: [
          "24px",
          {
            lineHeight: "31.25px",
            fontWeight: "600",
          },
        ],
        28: [
          "28px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        26: [
          "26px",
          {
            lineHeight: "41.66px",
            fontWeight: "500",
          },
        ],
        32: [
          "28px",
          {
            lineHeight: "36.46px",
            fontWeight: "600",
          },
        ],

        34: [
          "32px",
          {
            lineHeight: "41.66px",
            fontWeight: "700",
          },
        ],
        34: [
          "32px",
          {
            lineHeight: "41.66px",
            fontWeight: "700",
          },
        ],
        36: [
          "36px",
          {
            lineHeight: "46.87px",
            fontWeight: "700",
          },
        ],

        38: [
          "38px",
          {
            lineHeight: "49.87px",
            fontWeight: "700",
          },
        ],
        48: [
          "48px",
          {
            lineHeight: "62.6px",
            fontWeight: "700",
          },
        ],
        42: [
          "42px",
          {
            lineHeight: "59.89px",
            fontWeight: "700",
          },
        ],
        46: [
          "46px",
          {
            lineHeight: "59.89px",
            fontWeight: "700",
          },
        ],
        56: [
          "56px",
          {
            lineHeight: "56px",
            letterSpacing: "0.5px",
          },
        ],
      },
      height: {
        "424px": "424px",
      },
      colors: {
        "light-blue": "#E1ECFA",
        "wapas-blue": "#1C4B82",
        "wapas-primary": "#2563EB",
        "muted-blue": "#243344",
        "dark-slate-blue": "#324051",
        azure: "#407BFF",
        "ultramarine-blue": "#3242F5",
        "ghost-white": "#FCFDFF",
        charcoal: "#243344",
        "ice-white": "#FCFDFF",
        gunmetal: "#2B323C",
        "azure-radience": "#0077FF",
        white: {
          DEFAULT: "#fff",
          300: "#F8F8F8",
          500: "#fff",
          gradient: "#F6F7F9",
          gradientLinear: "#D4E9FB",
        },
        gray: {
          100: "#EEEFF2",
          200: "#F8F8F9",
          400: "#AFB5C0",
          500: "#DDDDDD",
          600: "#EAEDF1",
          700: "#324051",
          800: "#596168",
          900: "#717171",
        },
        blue: {
          100: "#0E0D35",
          200: "#3242F5",
          500: "#407BFF",
          600: "#072032",
        },
        black: {
          100: "#1C1C1C",
          500: "#4F5665",
          600: "#0B132A",
          700: "#1C1C1C",
        },
        red: { 100: "#FF6969", 200: "#FF3355" },
      },
    },
    screens: {
      sm: "425px",
      xs: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
