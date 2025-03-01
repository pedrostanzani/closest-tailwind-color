import { Settings } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Matchmaker } from "@/components/matchmaker";
import { SettingsButton } from "@/components/settings-button";

export default function Home() {
  return (
    <div className="min-h-screen h-full flex flex-col">
      <Navbar />
      <main className="mt-6 max-w-2xl mx-auto px-4 w-full flex-grow">
        <h1 className="mb-2 font-bold tracking-tight text-3xl text-balance">
          Closest Tailwind Color
        </h1>
        <p className="text-zinc-500 text-balance">
          The Tailwind color palette is a vast, beautiful curation of colors
          that come with Tailwind out of the box. Choose any color below and
          find its closest match on the default palette.
        </p>
        <Matchmaker />
      </main>
      <footer className="py-8">
        <p className="text-center text-zinc-500 text-sm">
          Made with love in Brazil. 🇧🇷
        </p>
      </footer>
      <div className="fixed bottom-4 right-4">
        <SettingsButton />
      </div>
    </div>
  );
}
