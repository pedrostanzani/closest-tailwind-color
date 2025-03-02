import * as React from "react";
import { Input } from "@/components/ui/input";

export const ColorInput = ({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <Input
        className="bg-white"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
    </div>
  );
};
