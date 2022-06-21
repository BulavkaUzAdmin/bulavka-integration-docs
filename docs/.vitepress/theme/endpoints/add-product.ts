const arrayOfImages = [
    {
        key: 'image',
        type: 'String',
        description: 'Ссылка на изображение',
        required: true
    },
    {
        key: 'filename',
        type: 'String',
        description: 'Хеш изображения',
        required: true
    },
    {
        key: 'index',
        type: 'Number',
        description: 'Позиция изображения',
        required: true
    },
    {
        key: 'width',
        type: 'Number',
        description: 'Ширина изображения',
        required: true
    },
    {
        key: 'height',
        type: 'Number',
        description: 'Высота изображения',
        required: true
    }
]

export default {
    method: 'post',
    path: 'productservice/add',
    body: [
        {
            key: 'id',
            type: 'String',
            description: 'ID товара на стороне поставщика',
            required: true,
        },
        {
            key: 'title',
            type: 'String',
            description: 'Загаловок (наименование) товара на сайте',
            required: true,
        },
        {
            key: 'description',
            type: 'String',
            description: 'Подробное описание товара',
            required: true,
        },
        {
            key: 'materials',
            type: 'String',
            description: 'Описание состава товара',
            optional: true
        },
        {
            key: 'seasons',
            type: 'Array',
            description: 'Определяет сезонность товара',
            optional: true
        },
        {
            key: 'categoryId',
            type: 'Number',
            description: 'ID категории',
            required: true,
        },
        {
            key: 'brandId',
            type: 'Number',
            description: 'ID бренда',
            required: true,
        },
        {
            key: 'image',
            type: 'Object',
            description: 'Основное фото товара',
            children: arrayOfImages,
            required: true
        },
        {
            key: 'images',
            type: 'Array[Object]',
            description: 'Дополнительные фотографии товара',
            optional: true,
            children: arrayOfImages
        },
        {
            key: 'tags',
            type: 'Array',
            description: 'ID тегов',
            required: true,
        },
        {
            key: 'unit',
            type: 'String',
            description: 'Единица измерения товара',
            required: true,
        },
        {
            key: 'ikpu',
            type: 'String',
            description: 'ИКПУ – это идентификационный код и услуг.',
            required: true,
        },
        {
            key: 'price',
            type: 'Number',
            description: 'Стоимость товара (UZS)',
            required: true,
        },
        {
            key: 'sale',
            type: 'Number',
            description: 'Стоимость товара со скидкой (UZS)',
            required: true,
        },
        {
            key: 'isVat',
            type: 'Boolean',
            description: 'Определяет, является ли товар с учётом НДС',
            required: true,
        },
        {
            key: 'vat',
            type: 'Number',
            description: 'Значение ставки НДС (процент)',
            required: true,
        },
        {
            key: 'cooperationForm',
            type: 'String',
            description: 'Определяет форму сотрудничества товара',
            required: true,
        },
        {
            key: 'gender',
            type: 'String',
            description: 'Определяет гендер товара',
            optional: true
        },
        {
            key: 'supplier',
            type: 'Object',
            description: 'Данные поставщика',
            optional: true,
            children: [
                {
                    key: 'id',
                    type: 'String',
                    description: 'ID товара (на стороне поставщика)',
                    optional: true,
                },
                {
                    key: 'title',
                    type: 'String',
                    description: 'Заголовок товара (на стороне поставщика)',
                    optional: true
                },
                {
                    key: 'color',
                    type: 'String',
                    description: 'Цвет товара (на стороне поставщика)',
                    optional: true
                },
                {
                    key: 'description',
                    type: 'String',
                    description: 'Описание товара (на стороне поставщика)',
                    optional: true
                },
            ]
        },
        {
            key: 'parameters',
            type: 'Array[Object]',
            description: 'Характеристики товара',
            optional: true,
            children: [
                {
                    key: 'parameterId',
                    type: 'Number',
                    description: 'ID параметра',
                    required: true
                },
                {
                    key: 'valueId',
                    type: 'Number',
                    description: 'ID значения параметра',
                    required: true
                },
                {
                    key: 'customValue',
                    type: 'Number',
                    description: 'Произвольное значение параметра',
                    optional: true
                },
            ]
        },
        {
            key: 'sizes',
            type: 'Array[Object]',
            description: 'Список с описанием размеров',
            required: true,
            children: [
                {
                    key: 'value',
                    type: 'String',
                    description: 'Значение размера',
                    required: true,
                },
                {
                    key: 'count',
                    type: 'Number',
                    description: 'Количество товара с данным размером',
                    required: true,
                },
                {
                    key: 'sizeId',
                    type: 'Number',
                    description: 'ID размера',
                    optional: true
                },
            ]
        },
        {
            key: 'count',
            type: 'Number',
            description: 'Количество товара - указывается если нет размеров',
            optional: true
        },
        {
            key: 'shippingDetails',
            type: 'Object',
            description: 'Перечень данных для вычисления доставки',
            required: true,
            children: [
                {
                    key: 'weight',
                    type: 'Number',
                    description: 'Вес товара (в килограммах)',
                    required: true,
                },
                {
                    key: 'height',
                    type: 'Number',
                    description: 'Высота товара (в сантиметрах)',
                    required: true,
                },
                {
                    key: 'length',
                    type: 'Number',
                    description: 'Длина товара (в сантиметрах)',
                    required: true,
                },
                {
                    key: 'width',
                    type: 'Number',
                    description: 'Ширина товара (в сантиметрах)',
                    required: true,
                },
                {
                    key: 'diameterTop',
                    type: 'Number',
                    description: 'Диаметр 1 (в сантиметрах)',
                    required: true,
                },
                {
                    key: 'diameterBottom',
                    type: 'Number',
                    description: 'Диаметр 2 (в сантиметрах)',
                    required: true,
                },
            ]
        }
    ]
}