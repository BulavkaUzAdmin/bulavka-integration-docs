export const addMedia = {
    method: 'post',
    path: 'filestorage/media/upload',
    queryParams: [
        {
            key: 'type',
            type: 'String',
            description: 'Данный параметр определяет тип фото',
            required: true
        }
    ]
}

export const replaceMedia = {
    method: 'post',
    path: 'filestorage/media/:fileName',
    pathParams: [
        {
            key: 'fileName',
            type: 'String',
            description: 'Наименование файла на диске (хеш)',
            required: true
        }
    ],
    queryParams: [
        {
            key: 'type',
            type: 'String',
            description: 'Данный параметр определяет тип фото',
            optional: true
        }
    ]
}

export const removeMedia = {
    method: 'delete',
    path: 'filestorage/media/:fileName',
    pathParams: [
        {
            key: 'fileName',
            type: 'String',
            description: 'Наименование файла на диске (хеш)',
            required: true
        }
    ],
}