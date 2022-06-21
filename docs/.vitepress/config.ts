import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Bulavka',
    description: 'Гайд / техническая документация для разработчиков',
    lang: 'ru-RU',
    lastUpdated: true,

    themeConfig: {
        editLink: {
            pattern: 'https://github.com/azabroflovski/bulavka-integration-docs/edit/master/docs/:path',
            text: 'Edit this page on GitHub'
        },

        sidebar: {
            '/guide/': sidebarList(),
            '/api/': sidebarList(),
            '/advanced/': sidebarList(),
        },

        nav: [
            { text: 'Введение', link: '/guide/getting-started' },
            { text: 'API', link: '/api/introduction' },
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

function sidebarList() {
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
                { text: 'Импорт', link: '/api/import-service' },
                { text: 'Добавить товар', link: '/api/add-product' },
                { text: 'Детали товара', link: '/api/get-product' },
                { text: 'Категории', link: '/api/categories' },
                { text: 'Размерный ряд', link: '/api/sizes-by-category' },
                { text: 'Бренды', link: '/api/brands' },
                { text: 'Добавить фото', link: '/api/add-media' },
                { text: 'Заменить фото', link: '/api/replace-media' },
                { text: 'Удалить фото', link: '/api/remove-media' },
                { text: 'Теги', link: '/api/tags' },
                { text: 'Характеристики', link: '/api/parameters' },
            ]
        },

        {
            text: 'Продвинутые',
            items: [
                { text: 'Вебхуки', link: '/advanced/webhooks' },
            ]
        },
    ]
}