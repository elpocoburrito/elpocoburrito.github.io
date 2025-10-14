import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "DakoGuides",
  description: "Stremio Guides by yours truely",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Stremio', link: '/Stremio' },
      { text: 'IPTV', link: '/IPTV' },
      { text: 'Useful Links', link: '/Links' },
    ],

    sidebar: [
      {
        text: 'Guides',
        items: [
          { text: 'Stremio', link: '/Stremio' },
          { text: 'IPTV', link: '/IPTV' },
          { text: 'Useful Links', link: '/Links' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/users/1319866328848400415' }
    ]
  }
})
