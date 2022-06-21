# Импорт <sup class="badge badge-primary">New</sup>

<br>

<request-block name="import-service" />

<br>

::: details Пример тело запроса (Request body)
```json
{
  "jsonrpc": "2.0",
  "id_discharge": 3,
  "params": [
    {
      "id": "SS22CA2N-17-5-11767",
      "title": "Поло короткий рукав",
      "description": "",
      "categoryId": "93",
      "additionalCategories": [],
      "productWeight": 555,
      "unit": "шт",
      "materials": "мерсиризированный хлопок",
      "composition": "100%mercerized cotton",
      "season": [
        "summer"
      ],
      "tags": [],
      "images": [],
      "propertyName": "Цвет||Размер",
      "property": [
        {
          "id": "33195ad4-7323-11ea-815b-000c29bec439",
          "color": "Blue",
          "size": "XL",
          "price": "179990",
          "sale": "",
          "quantity": "0",
          "onSale": 2,
          "ikpu": "06105001005000000",
          "isVat": "0",
          "cooperationForm": "FBS",
          "brandId": "12819",
          "images": [
            "https://terrapro.uz/upload/iblock/47d/r-0740.jpg",
            "https://terrapro.uz/upload/iblock/8c3/r-0741.jpg"
          ]
        }
      ]
    }
  ]
}
```
:::

----

### Response

::: details 200 OK
```json
{
  "msg": "Transferring data has been finished for request ID: {number}"
}
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::