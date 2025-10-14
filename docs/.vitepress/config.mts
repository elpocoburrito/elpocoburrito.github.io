import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DakoGuides",
  description: "Stremio Guides by yours truely",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/users/1319866328848400415' }
    ]
  }
})
