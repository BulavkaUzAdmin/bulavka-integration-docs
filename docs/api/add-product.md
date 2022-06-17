# Добавить товар

<br>

<request-block name="add-product" />

::: details Пример тело запроса (Request body)
```json
{
  "title": "Test product",
  "description": "Lorem Ipsum is simply dummy text of the...",
  "materials": "30% хлопок, 30% полиэстер, 20% эластан",
  "unit": "шт",
  "brandId": 5091,
  "categoryId": 94,
  "seasons": [
    "spring",
    "summer"
  ],
  "cooperationForm": "FBO",
  "tags": [
    9165,
    3075,
    9594
  ],
  "parameters": [
    {
      "parameterId": 10,
      "valueId": 10262
    },
    {
      "parameterId": 12,
      "valueId": 54,
      "customValue": "55"
    },
    {
      "parameterId": 16,
      "valueId": 74
    },
    {
      "parameterId": 1817,
      "customValue": "16"
    }
  ],
  "shippingDetails": {
    "length": 34,
    "width": 25,
    "diameterTop": 0,
    "diameterBottom": 0,
    "height": 16,
    "weight": 0.4
  },
  "sizes": [
    {
      "count": 5,
      "sizeId": 1640,
      "value": "S"
    },
    {
      "count": 5,
      "sizeId": 1641,
      "value": "M"
    }
  ],
  "count": 10,
  "initialPrice": 75000,
  "isVat": false,
  "price": 100000,
  "supplier": {
    "id": "SS21CA2N",
    "title": "Test product",
    "description": "Another long text for this field"
  },
  "ikpu": "12837128381273817",
  "image": {
    "filename": "wqaD42Dz3K",
    "image": "https://media.bulavka.uz/products/wqaD42Dz3K/wqaD42Dz3K?version=1647339152367",
    "width": 1280,
    "height": 274,
    "index": 0
  },
  "images": [
    {
      "filename": "wqaD42Dz3K",
      "image": "https://media.bulavka.uz/products/wqaD42Dz3K/wqaD42Dz3K?version=1647339152367",
      "width": 1280,
      "height": 274,
      "index": 1
    },
    {
      "filename": "wqaD42Dz3K",
      "image": "https://media.bulavka.uz/products/wqaD42Dz3K/wqaD42Dz3K?version=1647339152367",
      "width": 1280,
      "height": 274,
      "index": 2
    }
  ]
}
```
:::

<br>

----

### Response

::: details 200 OK
```json
{
    "id": Number,
    "title": String,
    "status": String,
    "inStock": Number, // 0 или 1, наличие товара на складе
    "price": Number,
    "initialPrice": Number,
    "commission": Number,
    "sales": Number,
    "returns": Number,
    "unit": String,
    "seller": {
        "id": Number,
        "firstName": String,
        "lastName": String,
        "type": String,
        "phone": String
    },
    "created": Number // Unix time
}
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::