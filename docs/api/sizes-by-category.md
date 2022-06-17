# Размеры по категории

<br>

<request-block name="sizes-by-category" />

<br>

---

### Response

::: details 200 OK
```json
[
  {
    "id": Number,
    "categoryId": Number,
    "title": String,
    "order": Number,
    "params": [
      {
        "sizeParamId": Number,
        "sizeParamTitle": String,
        "value": String
      }
      ...
    ]
  }
]
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::