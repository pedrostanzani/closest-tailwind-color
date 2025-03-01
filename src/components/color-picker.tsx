import React from "react";
import { HexColorPicker } from "react-colorful";
import { cn } from "@/lib/utils";
export const ColorPicker = ({
  color,
  onChange,
  className,
}: {
  color: string;
  onChange: (color: string) => void;
  className?: string;
}) => {
  return (
    <section className={cn("color-picker", className)}>
      <HexColorPicker color={color} onChange={onChange} />
    </section>
  );
};
