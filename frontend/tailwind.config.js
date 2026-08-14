/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7C3AED",
          pink: "#EC4899",
          indigo: "#6366F1",
          amber: "#F59E0B",
          emerald: "#10B981",
        },
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #7C3AED 0%, #EC4899 50%, #F59E0B 100%)",
        "card-gradient": "linear-gradient(135deg, #6366F1 0%, #7C3AED 100%)",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
