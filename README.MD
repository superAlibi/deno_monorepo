# deno_monorepo

这是一个 **Deno workspace**，用来实验 JavaScript / TypeScript 的较新语法和运行时能力，例如：

- [Temporal API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [`using` / Explicit Resource Management](https://github.com/tc39/proposal-explicit-resource-management)
- 其他尚未在日常项目里用上的语言特性

每个实验做成一个独立子包，互不影响；公共依赖放在仓库根目录的 `deno.json` 里，所有子包都会继承。

要求 **Deno 2.7+**（本仓库按 2.9 配置）。Temporal 已稳定，不需要 `--unstable-temporal`。

## 目录结构

```text
.
├── deno.json              # workspace 根配置
├── server/                # HTTP 测试服务（OpenAPI/Hono，从 deno_h3 迁入）
│   ├── deno.json
│   ├── main.ts
│   ├── src/
│   └── docs/              # 构建踩坑记录
├── web/                   # Fresh v2 前端（从 deno-fresh-v2 迁入，@lab/web）
│   ├── deno.json
│   ├── main.ts
│   ├── vite.config.ts
│   ├── routes/
│   └── …
├── packages/
│   ├── playground/        # Temporal + using 示例
│   └── shared/            # server 的共享响应逻辑
└── README.md
```

实验和库放在 `packages/<name>/`。根配置用 `packages/*` 自动收录一层目录，无需每次改根 `deno.json`。

可启动应用放在仓库根下并单独列入 workspace：`server/`（`@lab/server`，Hono/OpenAPI）与 `web/`（`@lab/web`，Fresh v2）。这样既能 `import { … } from '@lab/<name>'` 引用 `packages` 里的包，又不会和应用实验混在一起。`server` 的构建踩坑记录见 [`server/docs/BUILD_PITFALLS.md`](./server/docs/BUILD_PITFALLS.md)。

## 初始化一个新子包

子包必须在自己的 `deno.json` 里写 `"name"`。`deno task --filter` 和跨包 `import` 都靠这个字段匹配。建议统一用 `@lab/<name>`。

### 应用（可启动）

```sh
deno init packages/<name>
```

然后把 `packages/<name>/deno.json` 改成类似：

```json
{
  "name": "@lab/<name>",
  "exports": "./main.ts",
  "tasks": {
    "dev": "deno run --watch main.ts",
    "start": "deno run main.ts"
  }
}
```

写了 `name` 就必须同时写 `exports`，否则 Deno 会警告。应用一般导出入口文件即可。

需要权限时写进 task，例如 `deno run --allow-net --watch main.ts`。

约定：

- `dev`：开发时 watch 运行
- `start`：直接运行一次

### 库（没有启动方法）

```sh
deno init --lib packages/<name>
```

然后把 `packages/<name>/deno.json` 改成只保留包元信息，**不要写 `start` / `dev`**：

```json
{
  "name": "@lab/<name>",
  "version": "0.1.0",
  "exports": "./mod.ts"
}
```

`deno init --lib` 默认会加 `"dev": "deno test --watch ..."`，请删掉。库只被其他包 import，或用 `deno test` 跑测试，没有进程可启动。

其他子包可以直接按名字引用：

```ts
import { something } from '@lab/<name>';
```

## 从仓库根目录启动子包

等价于 pnpm 的 `--filter`：用 `deno task --filter`，匹配的是子包 `deno.json` 里的 `name`。

```sh
# 开发模式（watch）
deno task --filter "@lab/playground" dev
deno task --filter "@lab/server" dev
deno task --filter "@lab/web" dev

# 只匹配名称的一部分也可以
deno task --filter "playground" dev
deno task --filter "server" dev
deno task --filter "web" dev

# 运行一次
deno task --filter "@lab/playground" start
deno task --filter "@lab/server" start
```

`--filter` 会隐式按 workspace 递归查找；只有带对应 task 的子包会执行。库没有 `dev` / `start`，对库跑这两个命令会报找不到 task。

一次跑所有带 `dev` 的应用：

```sh
deno task --recursive dev
```

也可以进子包目录再执行：

```sh
cd packages/playground
deno task dev

cd server
deno task dev

cd web
deno task dev
```

## 根目录常用命令

这些命令作用在整个 workspace：

```sh
deno task fmt
deno task lint
deno task test
deno task check
```
