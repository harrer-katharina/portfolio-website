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
    "bg-[#F0EDE7]",
    "bg-[#EBE7DF]",
    "bg-[#E5E1DB]",
    "bg-[#D8D1C8]",
    "bg-[#D1C9BF]",

    "bg-[#FFC38D]",
    "bg-[#FFB889]",
    "bg-[#FFB084]",
    "bg-[#FFA98B]",
    "bg-[#FB9E8F]",
    "bg-[#F6938F]",
    "bg-[#EF8E99]",

    "bg-[#A3CDD0]",
    "bg-[#A9D3CF]",
    "bg-[#AFD8CE]",
    "bg-[#B5DCCD]",
    "bg-[#C1E5CC]",
  ],
  plugins: [],
  darkMode: "class",
};
