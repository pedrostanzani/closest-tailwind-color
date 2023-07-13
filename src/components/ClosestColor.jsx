import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { findClosestPaletteColor, getTextColor } from "@/utils/color";

import SelectedColorCard from "@/components/SelectedColorCard";
import ColorCard from "@/components/ColorCard";

const ClosestColor = (props) => {
  const closestColor = findClosestPaletteColor(props.inputColor);

  return (
    <div className="my-5">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Nearest match
      </h2>
      <p>
        The closest TailwindCSS color to {props.inputColor} is{" "}
        <span className="font-semibold">{closestColor.tailwind}</span>.
      </p>
      <div className="my-3 flex flex-col gap-2">
        <ColorCard color={closestColor.hex} name={closestColor.tailwind} />
        <SelectedColorCard color={props.inputColor} name={"Selected color"} />
      </div>
    </div>
  );
};

export default ClosestColor;
