import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SettingsState {
  tailwindVersion: "v3" | "v4"
  setTailwindVersion: (tailwindVersion: "v3" | "v4") => void
  includeBlackAndWhite: boolean
  setIncludeBlackAndWhite: (includeBlackAndWhite: boolean) => void
}

export const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        tailwindVersion: "v4",
        setTailwindVersion: (tailwindVersion) => set({ tailwindVersion }),
        includeBlackAndWhite: false,
        setIncludeBlackAndWhite: (includeBlackAndWhite) => set({ includeBlackAndWhite }),
      }),
      {
        name: 'tailwind-version-storage',
      },
    ),
  ),
)
