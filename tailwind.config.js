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
    "bg-[#000000]",
    "bg-[#F3F9F3]",
    "bg-[#F1F9F1]",
    "bg-[#ECF7EC]",
    "bg-[#E8F6E8]",
    "bg-[#E5F5E5]",
    "bg-[#E1F4E1]",
    "bg-[#DCF1DC]",
    "bg-[#D9F0D9]",
    "bg-[#D8F0D8]",
    "bg-[#D3EED3]",
    "bg-[#CBEBCB]",
    "bg-[#C3E6C3]",

    "bg-[#F4F2EE]",
    "bg-[#F0EDE7]",
    "bg-[#EBE7DF]",
    "bg-[#E5E1DB]",
    "bg-[#D8D1C8]",

    "bg-[#FFC38D]",
    "bg-[#FFB889]",
    "bg-[#FFB084]",
    "bg-[#FFA98B]",
    "bg-[#FB9E8F]",

    "bg-[#A3CDD0]",
    "bg-[#A9D3CF]",
    "bg-[#AFD8CE]",
    "bg-[#B5DCCD]",
    "bg-[#C1E5CC]",
  ],
  plugins: [],
  darkMode: "class",
};
