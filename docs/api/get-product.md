# Детали товар

<br>

<request-block name="get-product" />

::: warning Обратите внимание
Данный эндпоинт работает только с товарами на модерации
:::

<br>

---

### Response

::: details 200 OK
```json
{
  "count": Number,
  "canceledReason": String,
  "product": {
    "id": Number,
    "status": String,
    "title": String,
    "slug": String,
    "description": String,
    "price": Number,
    "initialPrice": Number,
    "priceInUSD": Number,
    "saleInUSD": Number,
    "commission": Number, // процент комиссии
    "categoryId": Number,
    "materials": String,
    "colors": String[],
    "gender": String,
    "condition": String,
    "cooperationForm": String,
    "created": Number, // unix time
    "image": {
        "image": String,
        "filename": String,
        "width": Number,
        "height": Number,
        "index": Number
    },
    "shippingDetails": {
        "weight": Number,
        "count": Number,
        "height": Number,
        "diameterTop": Number,
        "length": Number,
        "productId": Number,
        "width": Number,
        "diameterBottom": Number
    },
    "brand": {
        "id": Number,
        "title": String,
        "slug": String,
        "h2": String,
        "sale": Number,
    },
    "sizes": Array[
        {
            "sizeId": Number,
            "value": String,
            "count": Number,
            "soldCount": Number,
        }
    ],
    "seller": {
        "id": Number,
        "firstName": String,
        "lastName": String,
        "companyName": String,
        "type": String,
        "phone": String, // example: +998991112233
    },
    "images": Array[
        {
            "image": String,
            "filename": String,
            "width": Number,
            "height": Number,
            "index": Number
        },
    ],
    "parameters": Array[
        {
            "id": Number,
            "title": String,
            "hasMultipleChoice": Boolean,
            "isFilter": Boolean,
            "hasCustomValue": Boolean,
            "order": Number,
            "values": Array[
                {
                    "id": Number,
                    "value": String,
                    "order": Number,
                }
            ],
       }
    ],
  }
}
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::