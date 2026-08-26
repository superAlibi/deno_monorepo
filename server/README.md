# @lab/server

从 [deno_h3](https://github.com/superAlibi/deno_h3) 迁入的 HTTP 测试服务。用 Hono + `@hono/zod-openapi` 提供 OpenAPI 文档，通过 `Deno.serve` 启动。

共享逻辑在 `@lab/shared`。

构建与迁移过程中的踩坑记录见 [docs/BUILD_PITFALLS.md](./docs/BUILD_PITFALLS.md)。

```sh
deno task --filter "@lab/server" dev
```

默认 http://localhost:8000。

## API

- `GET /` — 跳转到 `/doc.html`
- `GET /success/{status}` — 2xx 成功响应
- `GET /redirect/{status}` — 3xx 重定向
- `GET /client-error/{status}` — 4xx 客户端错误
- `GET /server-error/{status}` — 5xx 服务器错误
- `GET /timeout?timeout=` — 延迟响应
- `GET /openapi.json` — OpenAPI spec
- `GET /doc.html` — Scalar 文档 UI
- `ALL /*` — 默认成功响应
