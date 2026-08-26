# @lab/web

从 [deno-fresh-v2](https://github.com/superAlibi/deno-fresh-v2) 迁入的 Fresh v2 前端，使用 Vite + Tailwind + daisyUI。

在 monorepo 根目录启动：

```sh
deno task --filter "@lab/web" dev
```

或进入本目录：

```sh
cd web
deno task dev
```

默认开发服务器：http://localhost:5030

## API 客户端（@hey-api/openapi-ts）

从 `@lab/server` 导出 OpenAPI，再生成 typed SDK：

```sh
deno task --filter "@lab/web" gen:api
```

生成结果在 `generated/api/`。用法示例：

```ts
import { client, getSuccessByStatus } from './generated/api/index.ts';

client.setConfig({ baseUrl: 'http://localhost:8000' });
const { data } = await getSuccessByStatus({ status: 200 });
```

> 生成器 pin 为 `@hey-api/openapi-ts@0.0.0-next-20260824173136`（兼容 TypeScript 7；稳定版 0.99 仍依赖旧 Compiler API）。

更多 Fresh 文档见：https://fresh.deno.dev/docs/getting-started
