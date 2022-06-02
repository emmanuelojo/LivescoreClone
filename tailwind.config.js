module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#AAAAAA",
        "n-black": "#0B0B0B",
        "n-bg-gray": "#181818",
        "n-white": "#FDFDFD",
        "n-orange": "#FF8A00",
        "n-blue": "#0D3AFF",
        "n-gray": "#555555",
        "n-dark-blue": "#072D5B",
        "n-dark-orange": "#AB5E03",
        "n-light-green": "#23DF8C",
        "n-dark-red": "#961A3D",
        "n-hover": "rgba(24,24,24,2)",
        "n-hover3": "#808080",
        "n-hover2": "#666",
      },
      fontSize: {
        "9px": "9px",
        xxs: "0.625rem",
        "11px": "0.688rem",
        "13px": "0.8125rem",
        "15px": "0.938rem",
        "22px": "1.375rem",
        "32px": "2rem ",
      },
      padding: {
        2.5: "0.625rem",
      },
      margin: {
        2.5: "0.625rem",
      },
    },
  },
  plugins: [],
};
