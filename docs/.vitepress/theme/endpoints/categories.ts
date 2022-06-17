export default {
    method: 'get',
    path: 'productservice/categories',
    queryParams: [
        {
            key: 'withEmptyCats',
            type: 'Boolean',
            description: 'В зависимости от переданного флага, включает/исключает категории без товаров'
        },
        {
            key: 'fluent',
            type: 'Boolean',
            description: 'В зависимости от данного параметра, зависит в каком виде придет ответ от сервера (древовидный, флюид)'
        }
    ]
}