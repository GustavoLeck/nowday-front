import { AgoraTailwindConfig } from "@ama-pt/agora-design-system";
import type { Config } from "tailwindcss";

const TailwindConfig: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@ama-pt/agora-design-system/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...AgoraTailwindConfig.theme,
    colors: {
      ...AgoraTailwindConfig.theme.colors,
      accent: {
        yellow: "#FFD05A",
        orange: "#FF5500",
        blue: "#3C6FE3",
        green: "#6BE7B1",
      },
    },
  },
  plugins: AgoraTailwindConfig.plugins,
  safelist: AgoraTailwindConfig.safelist,
  corePlugins: {
    preflight: false,
  },
};

export default TailwindConfig;
