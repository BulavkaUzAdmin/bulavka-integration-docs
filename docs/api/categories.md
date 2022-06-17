# Категории

<br>

<request-block name="categories" />

<br>

---

### Response

::: details 200 OK
```json
[
  {
    "id": Number,
    "children": Object[], // Здесь подкатегории
    "title": String,
    "metaTitle": String,
    "productCount": Number,
    "metaDescription": String,
    "description": String,
    "sale": Number,
    "isBrandFilterEnabled": Boolean,
    "isSizeFilterEnabled": Boolean,
    "slug": String,
    "h1": String,
    "h2": String,
    "order": Number,
    "imageSvg": {
      "filename": String,
      "image": String,
    },
    "image": {
      "filename": String,
      "image": String,
    },
  }
]
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::
