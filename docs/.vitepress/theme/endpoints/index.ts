import addProduct from './add-product'
import getProduct from './get-product'
import categories from './categories'
import brands from './brands'
import tags from './tags'
import { addMedia, replaceMedia, removeMedia } from './media'
import { sizesByCategory } from './sizes'
import { parametersByCategory } from './parameters'

export default {
    'add-product': addProduct,
    'get-product': getProduct,
    'categories': categories,
    'brands': brands,
    'add-media': addMedia,
    'replace-media': replaceMedia,
    'remove-media': removeMedia,
    'sizes-by-category': sizesByCategory,
    'tags': tags,
    'parameters-by-category': parametersByCategory
}