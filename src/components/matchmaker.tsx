"use client";

import { useState } from "react";
import { ColorPicker } from "@/components/color-picker";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ColorCard } from "./color-card";
import { ColorInput } from "./color-input";
import { findClosestPaletteColor, getOKLCHColor } from "@/lib/match";
import { useSettingsStore } from "@/stores/settings";

export const Matchmaker = () => {
  const [color, setColor] = useState("#be3737");
  const { tailwindVersion, includeBlackAndWhite } = useSettingsStore();
  const { tailwindColorName, hex: tailwindHex } = findClosestPaletteColor(
    color,
    tailwindVersion,
    includeBlackAndWhite
  );
  const oklchColor = getOKLCHColor(tailwindColorName, tailwindVersion);

  return (
    <div className="mt-6">
      <ColorInput color={color} setValidColor={setColor} />
      <ColorPicker className="mb-6" color={color} onChange={setColor} />
      <Card className="gap-4">
        <CardHeader className="gap-0.5">
          <CardTitle className="text-xl tracking-tight font-semibold">
            Nearest match
          </CardTitle>
          <CardDescription>
            The closest match to your color ({color}) is{" "}
            <span className="font-bold font-mono">{tailwindColorName}</span> (
            {tailwindHex}).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <ColorCard
              className="w-full sm:w-2/3"
              color={tailwindHex}
              name={tailwindColorName}
              description={
                typeof oklchColor === "string"
                  ? `oklch(${oklchColor})`
                  : tailwindHex
              }
            />
            <ColorCard
              className="h-24 self-end w-full sm:w-1/3"
              color={color}
              name="Selected color"
              description={color}
            />
          </div>
          {tailwindVersion === "v4" && <p className="mt-4 text-center text-xs text-zinc-500">Press shift+click to copy the nearest hex value.</p>}
        </CardContent>
      </Card>
    </div>
  );
};
