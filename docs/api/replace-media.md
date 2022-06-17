# Заменить фото

<br>

<request-block name="replace-media" />

<br>

---

### Response

::: details 200 OK
```json
{
    "image": String, // путь до картинки
    "filename": String,
    "path": String,
    "mimeType": String,
    "height": Number,
    "width": Number,
    "index": Number
}
```
:::

::: details 401 Unauthorized
```
The supplied authentication is invalid
```
:::