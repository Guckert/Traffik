import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { brand: { dark:"#07090b", card:"#0e1116", accent:"#67e8f9" } }, boxShadow: { inset: "inset 0 1px 0 rgba(255,255,255,.04)" } } },
  plugins: []
};
export default config;