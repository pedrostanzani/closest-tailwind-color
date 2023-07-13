import React, { useState } from "react";

import { Check, Copy } from "lucide-react";
import { getTextColor } from "@/utils/color";

const SelectedColorCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        color: getTextColor(props.color),
      }}
      className="flex h-18 w-36 cursor-pointer flex-col justify-end rounded-lg p-3 text-sm font-semibold transition-all"
    >
      <div className="select-none">
        <p>{props.name}</p>
        <p className="text-xs font-normal opacity-75">{props.color}</p>
      </div>
    </div>
  );
};

export default SelectedColorCard;
