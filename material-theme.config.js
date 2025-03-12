const contrast = { standard: 0, medium: 0.3, high: 0.9 };

export default {
  out: "src/theme.css",
  seedColor: "#4682B4",
  link: { light: "--color-blue-700", dark: "--color-blue-300" },
  form: {
    bg: {
      light: "--color-light-surface-container-lowest",
      dark: "--color-dark-surface-container-lowest",
    },
    text: {
      light: "--color-light-on-surface",
      dark: "--color-dark-on-surface",
    },
  },
  contrast: contrast.standard,
};
