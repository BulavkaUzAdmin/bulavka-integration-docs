export const sizesByCategory = {
    method: 'get',
    path: 'productservice/sizes/by_category/:id',
    pathParams: [
        {
            key: 'id',
            type: 'Number',
            description: 'ID категории'
        }
    ]
}