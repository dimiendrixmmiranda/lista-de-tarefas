import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // bg-tarefas
      backgroundImage: {
        'img-tarefas': "url('/imagens/background.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm:'425px',
        md:'768px',
        lg:'1024px',
        xl:'1280px',
        '2xl':'1440px',
      }
    },
  },
  plugins: [],
} satisfies Config;
