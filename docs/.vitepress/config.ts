import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Bulavka',
    description: 'Гайд / техническая документация для разработчиков',
    lang: 'ru-RU',

    themeConfig: {

        sidebar: {
            '/guide/': sidebarGuide(),
            '/api/': sidebarGuide()
        },

        nav: [
            { text: 'Введение', link: '/guide/getting-started.html' },
            { text: 'API', link: '/api/getting-started.html' },
            {
                text: 'Полезные ссылки',
                items: [
                    { text: 'Личный кабинет', link: 'https://business.bulavka.uz/console' },
                    { text: 'Changelog', link: 'https://github.com/azabroflovski/bulavka-integration-docs/blob/main/CHANGELOG.md' },
                ]
            }
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

function sidebarGuide() {
    return [
        {
            text: 'Начало знакомства',
            items: [
                { text: 'Введение', link: '/guide/getting-started' },
                { text: 'Авторизация', link: '/guide/api-token' },
                { text: 'Работа с API', link: '/guide/api-introduction' },
            ]
        },
        {
            text: 'API',
            items: [
                { text: 'Добавить товар', link: '/api/add-product' },
                { text: 'Детали товара', link: '/api/get-product' },
                { text: 'Категории', link: '/api' },
                { text: 'Размерный ряд', link: '/api' },
                { text: 'Бренды', link: '/api' },
                { text: 'Фото', link: '/api' },
                { text: 'Теги', link: '/api' },
                { text: 'Характеристики', link: '/api' },
            ]
        },
    ]
}