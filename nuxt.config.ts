// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
import path from "path";

export default defineNuxtConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname)
      }
    }
  },
  modules: [
    "@nuxtjs/tailwindcss", // '@nuxt/eslint',
    "@primevue/nuxt-module",
    "@pinia/nuxt"
  ],
  css: ["primeicons/primeicons.css", "~/assets/css/tailwind.css"],
  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
  eslint: {
    config: {
      stylistic: true,
      checked: true
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: "none"
        }
      }
    },
    autoImport: true,
    components: {
      include: "*"
    }
  },
  tailwindcss: {
    // Options
  }
});
