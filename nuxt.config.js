import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: [['@storyblok/nuxt', { accessToken: 'ql3TsvjkKIshOuJ7gRfh3Att' }]],
  app: {
    head: {
      script: [{ src: 'https://cdn.tailwindcss.com' }],
    },
  },
});
