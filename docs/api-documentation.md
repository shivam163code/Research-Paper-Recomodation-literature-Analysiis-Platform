# API contract

All endpoints are versioned under `/api/v1`.

- `GET /health`
- `GET /api/v1/papers/recommended`
- `GET /api/v1/papers/search?q=transformers`
- `GET /api/v1/papers/:id`
- `GET /api/v1/library`
- `POST /api/v1/library/:paperId`
- `DELETE /api/v1/library/:paperId`
- `GET /api/v1/history`
- `GET /api/v1/insights`

Responses use `{ success, data, message }`. Authentication middleware is intentionally ready to be enabled when the user model and JWT flow are connected.
