/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  safelist: [
    "bg-[#F4F2EE]",
    "bg-[#EBE7DF]",
    "bg-[#D8D1C8]",

    "bg-[#FFBF85]",
    "bg-[#FFB685]",
    "bg-[#FFA98B]",
    "bg-[#FB9E8F]",
    "bg-[#F6938F]",
    "bg-[#EF8E99]",

    "bg-[#EDE9FF]",
    "bg-[#A6D1D4]",
    "bg-[#B0D9D3]",
    "bg-[#BCE1CF]",
    "bg-[#C2E7D0]",
  ],
  plugins: [],
  darkMode: "class",
};
