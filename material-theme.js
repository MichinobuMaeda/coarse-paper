import {
  argbFromHex,
  DynamicScheme,
  Hct,
  hexFromArgb,
  TonalPalette,
} from "@material/material-color-utilities";

export const contrast = { low: 0.02, medium: 0.25, high: 1.0 };

/**
 * Generate a color scheme based on a seed color
 * @param {string} seedColor
 * @param {number} contrast
 * @returns {object}
 */
export const generateScheme = (seedColor, contrast) => {
  const hct = Hct.fromInt(argbFromHex(seedColor));
  const hue = hct.hue;
  const chroma = hct.chroma;

  const scheme = {};
  const brightnessSet = [
    { key: "light", value: false },
    { key: "dark", value: true },
  ];
  brightnessSet.forEach((brightness) => {
    const ds = new DynamicScheme({
      sourceColorHct: hct,
      variant: "variant",
      contrastLevel: contrast,
      isDark: brightness.value,
      primaryPalette: TonalPalette.fromHueAndChroma(hue, Math.max(48, chroma)),
      secondaryPalette: TonalPalette.fromHueAndChroma(hue, 16),
      tertiaryPalette: TonalPalette.fromHueAndChroma(hue + 60, 24),
      neutralPalette: TonalPalette.fromHueAndChroma(hue, 4),
      neutralVariantPalette: TonalPalette.fromHueAndChroma(hue, 8),
      errorPalette: TonalPalette.fromHueAndChroma(25, 84),
    });
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    [
      "primary",
      "surfaceTint",
      "onPrimary",
      "primaryContainer",
      "onPrimaryContainer",
      "secondary",
      "onSecondary",
      "secondaryContainer",
      "onSecondaryContainer",
      "tertiary",
      "onTertiary",
      "tertiaryContainer",
      "onTertiaryContainer",
      "error",
      "onError",
      "errorContainer",
      "onErrorContainer",
      "background",
      "onBackground",
      "surface",
      "onSurface",
      "surfaceVariant",
      "onSurfaceVariant",
      "outline",
      "outlineVariant",
      "shadow",
      "scrim",
      "inverseSurface",
      "inverseOnSurface",
      "inversePrimary",
      "primaryFixed",
      "onPrimaryFixed",
      "primaryFixedDim",
      "onPrimaryFixedVariant",
      "secondary",
      "onSecondaryFixed",
      "secondaryFixedDim",
      "onSecondaryFixedVariant",
      "tertiaryFixed",
      "onTertiaryFixed",
      "tertiaryFixedDim",
      "onTertiaryFixedVariant",
      "surfaceDim",
      "surfaceBright",
      "surfaceContainerLowest",
      "surfaceContainerLow",
      "surfaceContainer",
      "surfaceContainerHigh",
      "surfaceContainerHighest",
    ].forEach((key) => {
      scheme[`${brightness.key}${capitalize(key)}`] = hexFromArgb(ds[key]);
    });
  });

  return scheme;
};
