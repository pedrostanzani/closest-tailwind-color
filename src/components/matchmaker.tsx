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

const DEFAULT_COLOR = "#be3737";

export const Matchmaker = () => {
  const [color, setColor] = useState(DEFAULT_COLOR);
  const [inputValue, setInputValue] = useState(DEFAULT_COLOR);

  const { tailwindVersion, includeBlackAndWhite } = useSettingsStore();
  const { tailwindColorName, hex: tailwindHex } = findClosestPaletteColor(
    color,
    tailwindVersion,
    includeBlackAndWhite
  );
  const oklchColor = getOKLCHColor(tailwindColorName, tailwindVersion);

  const handleInputChange = (value: string) => {
    const newColor = value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6);
    setInputValue(`#${newColor}`);

    if (newColor.length === 3) {
      setColor(`#${[...newColor].map(c => c.repeat(2)).join('')}`);
    } else if (newColor.length === 6) {
      setColor(`#${newColor}`);
    }
  }

  return (
    <div className="mt-6">
      <ColorInput value={inputValue} setValue={handleInputChange} />
      <ColorPicker className="mb-6" color={color} onChange={(color) => {
        setColor(color);
        setInputValue(color);
      }} />
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
