import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--font-inter)",
        notoSansTc: "var(--body-font)",
      },
      colors: {
        primary: "#6B705C",
        secondary: "#B7B7A4",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
