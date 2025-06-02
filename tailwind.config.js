// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // Asegúrate que este bloque existe si lo necesitas en versiones alfa
  corePlugins: {
    preflight: true, // o verifica si está deshabilitado accidentalmente
  },
}
