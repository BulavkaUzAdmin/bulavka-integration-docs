import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Bulavka',
    description: 'Гайд / техническая документация для разработчиков',
    lang: 'ru-RU',

    themeConfig: {
        nav: [
            { text: 'Начало знакомства', link: '/guide/getting-started.html' },
            { text: 'Changelog', link: 'https://github.com/azabroflovski/bulavka-integration-docs/blob/main/CHANGELOG.md' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/azabroflovski/bulavka-integration-docs' },
            { icon: 'youtube', link: 'https://www.youtube.com/channel/UCKAQAHq-_kyHfZwR3_d3-pw' },
            { icon: 'instagram', link: 'https://www.instagram.com/bulavkauz/' },
            { icon: 'facebook', link: 'https://www.facebook.com/bulavkastore/' },
        ],

        footer: {
            message: 'With Love ❤️',
            copyright: 'Copyright © 2016-2022 Bulavka'
        }
    }
})