import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Lucien Naranjo | Diseño y Moda',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  typescript: {
    typeCheck: true
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  gtag: {
    id: 'UA-61659917-1'
  },

  compatibilityDate: '2025-03-24'
})
