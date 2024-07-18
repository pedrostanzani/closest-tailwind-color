"use client";
import ClosestColor from "@/components/ClosestColor";
import ColorPicker from "@/components/ColorPicker";
import ManualInput from "@/components/ManualInput";
import { isValidHexColor } from "@/lib/color";
import React, { SyntheticEvent, useState } from "react";

const ColorApp = () => {
  const [invalidColor, setInvalidColor] = useState(false);
  const [color, setColor] = useState("#be3737");
  const [goTo, setGoTo] = useState("#be3737");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalidColor(!isValidHexColor(event.target.value));
    setGoTo(event.target.value);
  };

  const handleColorPickerChange = (newColor: string) => {
    setGoTo(newColor);
    setColor(newColor);
  };

  const handleGo = (event: SyntheticEvent) => {
    event.preventDefault();
    if (isValidHexColor(goTo)) {
      const newColor = goTo.charAt(0) !== "#" ? `#${goTo}` : goTo;
      setGoTo(newColor);
      setColor(newColor);
    }
  };

  return (
    <>
      <ManualInput
        invalidColor={invalidColor}
        goTo={goTo}
        handleInputChange={handleInputChange}
        handleGo={handleGo}
      />
      <ColorPicker
        color={color}
        onChange={(newColor: string) => handleColorPickerChange(newColor)}
      />
      <ClosestColor inputColor={color} />
    </>
  );
};

export default ColorApp;
