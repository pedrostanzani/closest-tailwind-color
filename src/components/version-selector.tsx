"use client";
import * as React from "react";
import { tv } from 'tailwind-variants';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettingsStore } from "@/stores/settings";

const versionSelectorVariants = tv({
  slots: {
    trigger: "bg-white",
    item: "",
  },
  variants: {
    variant: {
      sm: {
        trigger: "leading-none text-xs px-2.5 py-1 h-8 w-[72px]",
        item: "text-xs",
      },
      lg: {
        trigger: "w-full",
        item: "",
      },
    }
  }
})

export function VersionSelector({
  variant = "sm",
}: {
  variant?: "sm" | "lg",
}) {
  const { tailwindVersion, setTailwindVersion } = useSettingsStore();
  const { trigger, item } = versionSelectorVariants({ variant });

  return (
    <Select
      defaultValue="v4"
      value={tailwindVersion}
      onValueChange={setTailwindVersion}
    >
      <SelectTrigger
        className={trigger()}
        data-side="right"
      >
        <SelectValue placeholder="Select a version" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectGroup>
          <SelectItem className={item()} value="v4">
            v4.0
          </SelectItem>
          <SelectItem className={item()} value="v3">
            v3.4
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
