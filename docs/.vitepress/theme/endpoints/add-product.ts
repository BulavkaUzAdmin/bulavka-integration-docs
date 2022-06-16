const arrayOfImages = [
    {
        key: 'image',
        type: 'String',
        description: 'Ссылка на изображение'
    },
    {
        key: 'filename',
        type: 'String',
        description: 'Хеш изображения'
    },
    {
        key: 'index',
        type: 'Number',
        description: 'Позиция изображения'
    },
    {
        key: 'width',
        type: 'Number',
        description: 'Ширина изображения'
    },
    {
        key: 'height',
        type: 'Number',
        description: 'Высота изображения'
    }
]

export default {
    method: 'post',
    path: 'productservice/add',
    body: [
        {
            key: 'id',
            type: 'String',
            description: 'ID товара на стороне поставщика'
        },
        {
            key: 'title',
            type: 'String',
            description: 'Загаловок (наименование) товара на сайте'
        },
        {
            key: 'description',
            type: 'String',
            description: 'Подробное описание товара'
        },
        {
            key: 'materials',
            type: 'String',
            description: 'Описание состава товара',
        },
        {
            key: 'seasons',
            type: 'Array',
            description: 'Определяет сезонность товара'
        },
        {
            key: 'categoryId',
            type: 'Number',
            description: 'ID категории'
        },
        {
            key: 'brandId',
            type: 'Number',
            description: 'ID бренда'
        },
        {
            key: 'image',
            type: 'Object',
            description: 'Основное фото товара',
            children: arrayOfImages
        },
        {
            key: 'images',
            type: 'Array[Object]',
            description: 'Дополнительные фотографии товара',
            children: arrayOfImages
        },
        {
            key: 'tags',
            type: 'Array',
            description: 'ID тегов на стороне Bulavka'
        },
        {
            key: 'unit',
            type: 'String',
            description: 'Единица измерения товара'
        },
        {
            key: 'ikpu',
            type: 'String',
            description: 'ИКПУ – это идентификационный код и услуг.'
        },
        {
            key: 'price',
            type: 'Number',
            description: 'Стоимость товара (UZS)'
        },
        {
            key: 'sale',
            type: 'Number',
            description: 'Стоимость товара со скидкой (UZS)'
        },
        {
            key: 'isVat',
            type: 'Boolean',
            description: 'Определяет, является ли товар с учётом НДС'
        },
        {
            key: 'vat',
            type: 'Number',
            description: 'Значение ставки НДС (процент)'
        },
        {
            key: 'cooperationForm',
            type: 'String',
            description: 'Определяет форму сотрудничества товара'
        },
        {
            key: 'gender',
            type: 'String',
            description: 'Определяет гендер товара'
        },
        {
            key: 'supplier',
            type: 'Object',
            description: 'Данные поставщика',
            children: [
                {
                    key: 'id',
                    type: 'String',
                    description: 'ID товара (на стороне поставщика)'
                },
                {
                    key: 'title',
                    type: 'String',
                    description: 'Заголовок товара (на стороне поставщика)'
                },
                {
                    key: 'color',
                    type: 'String',
                    description: 'Цвет товара (на стороне поставщика)'
                },
                {
                    key: 'description',
                    type: 'String',
                    description: 'Описание товара (на стороне поставщика)'
                },
            ]
        },
        {
            key: 'parameters',
            type: 'Array[Object]',
            description: 'Характеристики товара',
            children: [
                {
                    key: 'parameterId',
                    type: 'Number',
                    description: 'ID параметра на стороне Bulavka',
                },
                {
                    key: 'valueId',
                    type: 'Number',
                    description: 'ID значения параметра на стороне Bulavka',
                },
                {
                    key: 'customValue',
                    type: 'Number',
                    description: 'Произвольное значение параметра на стороне Bulavka',
                },
            ]
        },
        {
            key: 'sizes',
            type: 'Array[Object]',
            description: 'Список с описанием размеров',
            children: [
                {
                    key: 'value',
                    type: 'String',
                    description: 'Значение размера',
                },
                {
                    key: 'count',
                    type: 'Number',
                    description: 'Количество товара с данным размером',
                },
                {
                    key: 'sizeId',
                    type: 'Number',
                    description: 'ID размера',
                },
            ]
        },
        {
            key: 'count',
            type: 'Number',
            description: 'Количество товара - указывается если нет размеров'
        },
        {
            key: 'shippingDetails',
            type: 'Object',
            description: 'Перечень данных для вычисления доставки',
            children: [
                {
                    key: 'weight',
                    type: 'Number',
                    description: 'Вес товара (в килограммах)',
                },
                {
                    key: 'height',
                    type: 'Number',
                    description: 'Высота товара (в сантиметрах)',
                },
                {
                    key: 'length',
                    type: 'Number',
                    description: 'Длина товара (в сантиметрах)',
                },
                {
                    key: 'width',
                    type: 'Number',
                    description: 'Ширина товара (в сантиметрах)',
                },
                {
                    key: 'diameterTop',
                    type: 'Number',
                    description: 'Диаметр 1 (в сантиметрах)',
                },
                {
                    key: 'diameterBottom',
                    type: 'Number',
                    description: 'Диаметр 2 (в сантиметрах)',
                },
            ]
        }
    ]
}