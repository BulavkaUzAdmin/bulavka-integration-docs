export default {
    method: 'get',
    path: 'productservice/tags/search',
    queryParams: [
        {
            key: 'searchKey',
            type: 'String',
            description: 'Ключевое слово для поиска'
        },
        {
            key: 'max',
            type: 'Number',
            description: 'Количество возвращаемых элементов'
        }
    ]
}