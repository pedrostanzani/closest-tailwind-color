import hex_v3 from "@/static/v3/hex.json"
import hex_v4 from "@/static/v4/hex.json"
import oklch_v4 from "@/static/v4/oklch.json"

export function findClosestPaletteColor(hexColor: string, tailwindVersion: "v3" | "v4", includeBlackAndWhite: boolean = false): {
  tailwindColorName: string;
  hex: string;
} {
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

  const hex_file = tailwindVersion === "v3" ? hex_v3 : hex_v4;

  // Iterate over each palette color and find the closest one
  for (const key in hex_file) {
    console.log(key)
    if (!includeBlackAndWhite && (key === "black" || key === "white")) {
      continue;
    }
    const paletteColor = hex_file[key as keyof typeof hex_file];
    const color1 = hexToRgb(hexColor);
    const color2 = hexToRgb(paletteColor);
    const diff = colorDiff(color1, color2);

    if (diff < minDiff) {
      minDiff = diff;
      closestColor = key;
    }
  }

  return {
    tailwindColorName: closestColor as string,
    hex: hex_file[closestColor as keyof typeof hex_file],
  };
}

export function getOKLCHColor(tailwindColorName: string, tailwindVersion: "v3" | "v4"): string | null {
  if (tailwindVersion === "v3") {
    return null;
  }

  const oklch_v4_file = oklch_v4 as Record<string, Record<string, string>>;

  const [color, shade] = tailwindColorName.split("-");

  try {
    return oklch_v4_file[color][shade] ?? null;
  } catch (error) {
    return null;
  }
}