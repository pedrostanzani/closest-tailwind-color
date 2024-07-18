import palette from "./palette.json";

type StringMap = { [key: string]: unknown };

const findClosestPaletteColor = (hexColor: string) => {
  let minDiff = Infinity;
  let closestColor = null;

  // Convert the hex color to RGB values
  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  };

  // Calculate the color difference using Euclidean distance formula
  const colorDiff = (color1: number[], color2: number[]) => {
    const [r1, g1, b1] = color1;
    const [r2, g2, b2] = color2;
    const diffR = r1 - r2;
    const diffG = g1 - g2;
    const diffB = b1 - b2;
    return Math.sqrt(diffR * diffR + diffG * diffG + diffB * diffB);
  };

  // Iterate over each palette color and find the closest one
  for (const key in palette) {
    const paletteColor = palette[key as keyof typeof palette];
    const color1 = hexToRgb(hexColor);
    const color2 = hexToRgb(paletteColor);
    const diff = colorDiff(color1, color2);

    if (diff < minDiff) {
      minDiff = diff;
      closestColor = key;
    }
  }

  return {
    tailwind: closestColor,
    hex: palette[closestColor as keyof typeof palette],
  };
};

const getTextColor = (background: string) => {
  // Remove the "#" symbol from the HEX string
  const hex = background.replace("#", "");

  // Extract the RGB values from the HEX string
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate the brightness of the background color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine the text color based on the background brightness
  return brightness > 128 ? "#000000" : "#FFFFFF";
};

const isValidHexColor = (str: string) => {
  const hexColorRegex = /^(?:#)?([0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(str);
};

export { findClosestPaletteColor, getTextColor, isValidHexColor };
