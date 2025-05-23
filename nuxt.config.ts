// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxt/eslint'
  ],
  tailwindcss: {
    // Options
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    },
    autoImport: true,
    components: {
      include: '*'
    }
  },
  eslint: {
    config: {
      stylistic: true,
      checked: true
    }
  }
})