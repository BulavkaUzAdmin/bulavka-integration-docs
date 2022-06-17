# Бренды

<br>

<request-block name="brands" />


<br>

---

### Response

::: details 200 OK
```json
{
  "totalCount": Number, // Количество найденных брендов
  "brands": [
    {
      "id": Number,
      "title": String, // Наименование бренда
      "slug": String, // URL slug
      "h2": String,
      "sale": Number
    }
    ...
  ]
}
```

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::