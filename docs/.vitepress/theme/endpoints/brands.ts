export default {
    method: 'get',
    path: 'productservice/brands/search',
    queryParams: [
        {
            key: 'searchKey',
            type: 'String',
            description: 'Ключевое слово для поиска',
            required: true
        },
        {
            key: 'max',
            type: 'Number',
            description: 'Количество возвращаемых элементов',
            optional: true
        }
    ]
}