export const parametersByCategory = {
    method: 'get',
    path: 'parameterservice/categories/:id',
    pathParams: [
        {
            key: 'id',
            type: 'String',
            description: 'ID категории',
            required: true
        }
    ]
}