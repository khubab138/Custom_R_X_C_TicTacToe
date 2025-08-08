import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/Custom_R_X_C_TicTacToe/",
  plugins: [react(), tailwindcss()],
});
