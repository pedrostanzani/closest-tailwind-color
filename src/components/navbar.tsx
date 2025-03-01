import { GitHub } from "@/icons/github";
import { MousePointer2 } from "lucide-react";
import { VersionSelector } from "./version-selector";

export const Navbar = () => {
  return (
    <header className="shrink-0 sticky top-0 w-full z-50 h-18 bg-[#e4e4e4]/95 backdrop-blur supports-[backdrop-filter]:bg-[#e4e4e4]/60 flex justify-between items-center px-4 md:px-6 border-b border-neutral-200">
      <div className="flex justify-center items-center gap-2">
        <MousePointer2 fill="#f59e0b" className="h-5 w-5" />
        <span className="font-bold tracking-tight text-lg">
          Closest Tailwind Color
        </span>
      </div>
      <div className="flex items-center gap-5">
        <VersionSelector variant="sm" />
        <a
          className="hover:fill-[#0a0c1a]/70 fill-[#0a0c1a]"
          href="https://github.com/pedrostanzani/closest-tailwind-color"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className="fill-inherit transition-colors h-5 w-5" />
        </a>
      </div>
    </header>
  );
};
