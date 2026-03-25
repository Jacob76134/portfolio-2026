export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  content: {
    highlight: {
      theme: 'github-light'
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Jacob Brewer',
      meta: [
        { name: 'description', content: 'Software engineer specialising in web applications and user-centric product development.' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&display=swap'
        }
      ]
    }
  }
})
