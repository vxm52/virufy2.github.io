module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#13C2C2", // Buttons, Links
        secondary: {
          100: "#00B696", // Footer Background
          200: "#08979C", // Navbar Buttons
        },
        filler: "rgba(172, 224, 215, 0.05)",
      },
      textColor: {
        gray: {
          100: "#1F1F1F", // Body text
          200: "#434343", // Sub-headings
          300: "#2D2D2D", // Main heading
          400: "#21242C", // Mobile nav text
        },
        teal: "#13C2C2",
      },
      fontFamily: {
        heading: ["'Open Sans'"],
        subHeading: ["'Source Sans Pro'"],
        body: ["'Source Sans Pro'"],
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "group-hover"],
  },
  plugins: [],
};
