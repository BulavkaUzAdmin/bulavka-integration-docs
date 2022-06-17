# Теги

<br>

<request-block name="tags" />

<br>

---

### Response

::: details 200 OK
```json
{
  "totalCount": Number, // Количество найденных тегов
  "data": [
    {
      "id": Number,
      "name": String, // Название тега
      "selected": Boolean
    }
    ...
  ]
}
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::