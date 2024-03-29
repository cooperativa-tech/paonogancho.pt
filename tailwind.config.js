const baseSpacing = { 4: "4px" };
for (let i = 0; i < 98; i += 2) {
  baseSpacing[i * 4] = `${i * 4}px`;
}
const column = 54;
const gutter = 28;
const baseColumns = Array(18)
  .fill()
  .reduce(
    (memo, _, index) => ({
      ...memo,
      [`${index + 1}-col`]: `${column * (index + 1) + gutter * index}px`,
    }),
    {},
  );
const columns = {
  ...baseColumns,
  "column-spacing": `${column + gutter * 2}px`,
  none: "none",
  0: "0",
  "1/2": "50%",
  "1/4": "25%",
  "3/4": "75%",
  full: "100%",
  screen: "100vw",
};

module.exports = {
  purge: {
    mode: "all",
    content: [
      "./{site,assets,static}/**/*.js",
      "./{site,assets,static}/**/*.njk",
      "./{site,assets,static}/**/*.liquid",
      "./{site,assets,static}/**/*.ts",
      "./{site,assets,static}/**/*.css",
    ],
  },
  theme: {
    fontFamily: {
      sans: ["Libre Baskerville", "sans-serif"],
      serif: ["Millik", "serif"],
    },
    fontSize: {
      8: ["8px", "1.5"],
      12: ["12px", "1.5"],
      16: ["16px", "1.5"],
      20: ["20px", "1.5"],
      28: ["28px", "1.5"],
      40: ["40px", "1.5"],
      56: ["56px", "1.5"],
      66: ["66px", "1.5"],
      84: ["84px", "1.5"],
      112: ["112px", "1.5"],
      168: ["168px", "1.5"],
      224: ["224px", "1.5"],
      320: ["320px", "1.5"],
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    scale: {
      101: "1.01",
    },
    spacing: {
      ...baseSpacing,
      gutter: `${gutter}px`,
      "half-gutter": `${gutter / 2}px`,
      "column-spacing": columns["column-spacing"],
    },
    colors: {
      white: "#FFFFFF",
      beige: "#FFF9F3",
      blue: "#4355FF",
      red: "#FF3838",
      green: "#6FCC58",
      white: "#FFFFFF",
      black: "black",
      pink: "#FF7DD6",
      transparent: "transparent",
    },

    extend: {
      width: columns,
      maxWidth: columns,
      minWidth: columns,
      borderRadius: {
        "4xl": "50px",
      },
    },
  },
};
