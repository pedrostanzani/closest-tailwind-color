import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

import "./styles/ColorPicker.css";

const ColorPicker = (props) => {
  return (
    <section className="color-picker">
      <HexColorPicker color={props.color} onChange={props.onChange} />
    </section>
  );
};

export default ColorPicker;
