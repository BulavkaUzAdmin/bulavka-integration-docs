export default {
    method: 'get',
    path: 'productservice/unapproved/detail?productId',
    queryParams: [
        {
            key: 'id',
            type: 'Number',
            description: 'ID товара',
            required: true
        }
    ]
}