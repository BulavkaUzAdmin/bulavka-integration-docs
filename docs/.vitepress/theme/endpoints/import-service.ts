export default {
    method: 'post',
    path: 'importservice/products/add',
    body: [
        {
            key: 'jsonrpc',
            type: 'String',
            description: 'Версия JSON-RPC',
            required: true,
        },
        {
            key: 'id_discharge',
            type: 'String',
            description: 'ID запроса (импорта)',
            required: true,
        },
        {
            key: 'params',
            type: 'Array[Object]',
            description: 'Список товаров',
            required: true,
            children: [
                {
                    key: 'id',
                    type: 'String',
                    description: 'ID товара (артикул)',
                    required: true
                },
                {
                    key: 'title',
                    type: 'String',
                    description: 'Наименование товара',
                    required: true
                },
                {
                    key: 'description',
                    type: 'String',
                    description: 'Описание товара',
                    required: true
                },
                {
                    key: 'categoryId',
                    type: 'String',
                    description: 'ID категории',
                    required: true
                },
                {
                    key: 'additionalCategories',
                    type: 'Array[Number]',
                    description: 'ID дополнительных категорий',
                    optional: true
                },
                {
                    key: 'productWeight',
                    type: 'Number',
                    description: 'Вес товара (в граммах)'
                },
                {
                    key: 'images',
                    type: 'Array[String]',
                    description: 'Фотографии товара, первый элемент массива автоматически становится главным изображением',
                    required: true,
                },
                {
                    key: 'unit',
                    type: 'String',
                    description: 'Единица измерения товара',
                    required: true,
                    enums: ['шт', 'комплект', 'пара', 'упаковка']
                },
                {
                    key: 'materials',
                    type: 'String',
                    description: 'Материалы товара',
                    example: '85% вискоз, 15% полиэстер',
                    optional: true
                },
                {
                    key: 'composition',
                    type: 'String',
                    description: 'Состав товара',
                    example: '100% mercerized cotton',
                    optional: true
                },
                {
                    key: 'season',
                    type: 'Array[String]',
                    description: 'Определяет сезон товара',
                    enums: ['spring', 'summer', 'autumn', 'winter'],
                    optional: true
                },
                {
                    key: 'tags',
                    type: 'Array[String]',
                    description: 'ID тегов',
                    example: ['Водолазка', 'Трикотаж', 'Свитер'],
                    optional: true
                },
                {
                    key: 'propertyName',
                    type: 'String',
                    description: 'Укажите вариативность товаров',
                    example: 'Цвет||Размер',
                    required: true
                },
                {
                    key: 'property',
                    type: 'Array[Object]',
                    children: [
                        {
                            key: 'id',
                            type: 'String',
                            description: 'ID товара (артикул)',
                            required: true
                        },
                        {
                            key: 'color',
                            type: 'String',
                            description: 'Цвет товара',
                            required: true,
                            example: 'Красный'
                        },
                        {
                            key: 'size',
                            type: 'String',
                            description: 'Размер товара',
                            example: 'XL',
                            required: true
                        },
                        {
                            key: 'quantity',
                            type: 'Number',
                            description: 'Количество товара',
                            required: true
                        },
                        {
                            key: 'price',
                            type: 'Number',
                            description: 'Цена товара (UZS)',
                            required: true,
                        },
                        {
                            key: 'sale',
                            type: 'Number',
                            description: 'Цена товара со скидкой (UZS)',
                            required: true,
                        },
                        {
                            key: 'isVat',
                            type: 'Boolean',
                            description: 'Определяет, является ли товар с учётом НДС',
                            required: true,
                        },
                        {
                            key: 'onSale',
                            type: 'Number',
                            description: 'Определяет, находится ли товар в продаже',
                            required: true,
                        },
                        {
                            key: 'ikpu',
                            type: 'String',
                            description: 'ИКПУ – это идентификационный код и услуг.',
                            required: true,
                        },
                        {
                            key: 'cooperationForm',
                            type: 'String',
                            description: 'Определяет форму сотрудничества товара',
                            required: true,
                            enums: ['FBO', 'FBS', 'RETAIL'],
                        },
                        {
                            key: 'brandId',
                            type: 'Number',
                            description: 'ID бренда',
                            required: true,
                        },
                        {
                            key: 'images',
                            type: 'Array[String]',
                            description: 'Фотографии товара, первый элемент массива автоматически становится главным изображением',
                            required: true,
                        },
                    ]
                }
            ]
        },
    ]
}