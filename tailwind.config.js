import colors, { blue } from "tailwindcss/colors";
import { generateScheme, contrast } from "./material-theme.js";

const lightLink = blue[700];
const darkLink = blue[300];

const materialTheme = generateScheme("#769CDF", contrast.low);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      ...colors,
      ...materialTheme,
      lightLink,
      darkLink,
      lightForm: materialTheme.lightSurfaceContainerLowest,
      lightOnForm: materialTheme.lightOnSurface,
      darkForm: materialTheme.darkSurfaceContainerLowest,
      darkOnForm: materialTheme.darkOnSurface,
    },
    extend: {},
  },
  plugins: [],
};
