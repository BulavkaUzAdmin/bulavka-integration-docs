export default {
    method: 'get',
    path: 'productservice/tags/search',
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