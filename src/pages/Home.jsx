import React, { useState } from "react";

import { isValidHexColor } from "@/utils/color";

import Container from "@/components/Container";
import ColorPicker from "@/components/ColorPicker";
import ManualInput from "@/components/ManualInput";
import PageHeading from "@/components/PageHeading";
import ClosestColor from "@/components/ClosestColor";

const Home = () => {
  const [invalidColor, setInvalidColor] = useState(false);
  const [color, setColor] = useState("#be3737");
  const [goTo, setGoTo] = useState("#be3737");

  const handleInputChange = (event) => {
    setInvalidColor(!isValidHexColor(event.target.value));
    setGoTo(event.target.value);
  };

  const handleColorPickerChange = (newColor) => {
    setGoTo(newColor);
    setColor(newColor);
  };

  const handleGo = (event) => {
    event.preventDefault();
    if (isValidHexColor(goTo)) {
      const newColor = goTo.charAt(0) !== "#" ? `#${goTo}` : goTo;
      setGoTo(newColor);
      setColor(newColor);
    }
  };

  return (
    <Container className="mt-4">
      <PageHeading />
      <ManualInput
        invalidColor={invalidColor}
        goTo={goTo}
        handleInputChange={handleInputChange}
        handleGo={handleGo}
      />
      <ColorPicker
        color={color}
        onChange={(newColor) => handleColorPickerChange(newColor)}
      />
      <ClosestColor inputColor={color} />
    </Container>
  );
};

export default Home;
