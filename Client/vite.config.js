import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Opciones de configuración del complemento CSS
    // Ejemplo:
    modules: true, // Si deseas habilitar módulos CSS
  },
});
