"use client";
import * as React from "react";
import { Settings } from "lucide-react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import { VersionSelector } from "./version-selector";
import { useSettingsStore } from "@/stores/settings";
export function SettingsButton() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="cursor-pointer" variant="outline" size="icon">
            <Settings />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">Settings</DialogTitle>
          </DialogHeader>
          <SettingsForm onDone={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus={open}>
      <DrawerTrigger asChild>
        <Button className="cursor-pointer" variant="outline" size="icon">
          <Settings />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-xl">Settings</DrawerTitle>
        </DrawerHeader>
        <SettingsForm onDone={() => setOpen(false)} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button className="cursor-pointer" variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function SettingsForm({
  onDone,
  className,
}: {
  onDone: () => void;
  className?: string;
}) {
  const { includeBlackAndWhite, setIncludeBlackAndWhite } = useSettingsStore();

  return (
    <div className={cn("space-y-8", className)}>
      <div className={"grid items-start gap-7"}>
        <div>
          <h2 className="font-medium mb-1">Tailwind version</h2>
          <p className="text-sm text-zinc-500 mb-2.5">
            On January 2025, Tailwind v4.0 was released with a{" "}
            <a
              href="https://tailwindcss.com/blog/tailwindcss-v4#modernized-p3-color-palette"
              target="_blank"
              className="underline hover:text-zinc-600 transition-colors"
            >
              modernized P3 color palette
            </a>
            . However, you may choose to use the old palette by selecting
            version 3.4 below.
          </p>
          <VersionSelector variant="lg" />
        </div>
        <div>
          <div className="flex justify-between items-center gap-2 mb-1">
            <h2 className="font-medium">Include black and white</h2>
            <Switch checked={includeBlackAndWhite} onCheckedChange={setIncludeBlackAndWhite} />
          </div>
          <p className="text-sm text-zinc-500">
            If selected, the colors black (
            <span className="font-mono">#000000</span>) and white (
            <span className="font-mono">#FFFFFF</span>) will be included in the
            matchmaking algorithm, together with the default colors and shades.
          </p>
        </div>
      </div>
      <Button className="w-full cursor-pointer" onClick={onDone}>
        Done
      </Button>
    </div>
  );
}
