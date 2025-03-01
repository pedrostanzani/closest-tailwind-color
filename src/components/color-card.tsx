import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn, getTextColorBasedOnBackground, isCloseToWhite } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "motion/react";
import { useShiftKey } from "@/hooks/use-shift-key";

export const ColorCard = ({
  color,
  name,
  description,
  className,
}: {
  color: string;
  name: string;
  description: string;
  className?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const shiftIsPressed = useShiftKey();

  const handleCopy = (e: React.MouseEvent) => {
    setIsCopied(true);

    if (e.shiftKey) {
      navigator.clipboard.writeText(color);
    } else {
      navigator.clipboard.writeText(description);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={handleCopy}
            className={cn(
              "group flex hover:opacity-90 h-48 border border-transparent cursor-pointer flex-col justify-between rounded-lg p-3 text-sm font-semibold transition-all",
              isCloseToWhite(color, 5) && "border-zinc-200",
              className
            )}
            style={{
              backgroundColor: color,
              color: getTextColorBasedOnBackground(color),
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isCopied ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.075 }}
                  className="self-end"
                >
                  <Check className="h-4 w-4 group-hover:opacity-90 transition-opacity" />
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.075 }}
                  className="self-end"
                >
                  <Copy className="h-4 w-4 group-hover:opacity-90 transition-opacity" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="select-none text-start">
              <p>{name}</p>
              <p className="text-xs font-normal opacity-75">{description}</p>
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy to clipboard ({shiftIsPressed ? color : description})</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
