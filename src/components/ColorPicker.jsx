import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = (props) => {
  return (
    <section className="color-picker">
      <HexColorPicker color={props.color} onChange={props.onChange} />
    </section>
  );
};

export default ColorPicker;
