"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { getTextColor } from "@/lib/color";

const ColorCard = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(props.name);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        backgroundColor: props.color,
        color: getTextColor(props.color),
      }}
      className="flex h-36 w-36 cursor-pointer flex-col justify-between rounded-lg p-3 text-sm font-semibold transition-all"
    >
      <div className="self-end">{isCopied ? <Check /> : <Copy />}</div>
      <div className="select-none">
        <p>{props.name}</p>
        <p className="text-xs font-normal opacity-75">{props.color}</p>
      </div>
    </div>
  );
};

export default ColorCard;
