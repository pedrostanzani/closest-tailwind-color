import * as React from "react";
import { Input } from "@/components/ui/input";

export const ColorInput = ({
  color,
  setValidColor,
}: {
  color: string;
  setValidColor: (color: string) => void;
}) => {
  const [valid, setValid] = React.useState(true);
  const [value, setValue] = React.useState(color);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value.replace(/#/g, "").slice(0, 6);
    setValue(`#${newColor}`);
    
    if (newColor.length === 6 || newColor.length === 3) {
      const hexRegex = /^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
      const isValid = hexRegex.test(newColor)
      setValid(isValid);
      
      if (isValid) {
        if (newColor.length === 3) {
          setValidColor(`#${[...newColor].map(c => c.repeat(2)).join('')}`);
        } else {
          setValidColor(`#${newColor}`)
        }
      }
    } else {
      setValid(true);
    }
  }

  React.useEffect(() => {
    const parentHex = color.replace("#", "");
    const childHex = value.replace("#", "");

    if (childHex.length !== 3 || [...childHex].map(c => c.repeat(2)).join('') !== parentHex) {
      setValue(color);
    }
  }, [color]);

  return (
    <div className="flex flex-col gap-1 mb-5">
      <Input
        aria-invalid={!valid}
        className="bg-white"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
      { !valid && <p className="text-red-600 text-sm tracking-tight font-medium">Invalid color</p>}
    </div>
  );
};
