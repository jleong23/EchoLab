/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Audiowide", "sans-serif"],
        code: ["Fira Code", "monospace"],
        accent: ["Orbitron", "sans-serif"],
      },

      colors: {
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
        panel: "rgb(var(--panel))",
        panelInner: "rgb(var(--panelInner))",
        panelMuted: "rgb(var(--panelMuted))",
        panelBorder: "rgb(var(--panelBorder))",
        danger: "rgb(var(--danger))",
        dangerSoft: "rgb(var(--dangerSoft) / 0.5)",
        success: "rgb(var(--success))",
      },

      boxShadow: {
        panel: "0 6px 20px rgba(0,0,0,0.6)",
      },

      backdropBlur: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
