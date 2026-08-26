# Fresh 项目 Agent 指南

## 项目概述

这是一个基于 **Fresh 2.2.0** 框架的 Deno Web 应用项目，主要用于展示现代 CSS 特性和 Web 技术案例。项目使用 Preact、Tailwind CSS 4.x 和 DaisyUI 构建。

## 技术栈

### 核心框架

- **Fresh**: `@fresh/core@^2.2.0` - Deno 的全栈 Web 框架
- **Preact**: `preact@^10.28.0` - 轻量级 React 替代方案
- **Deno**: 运行时环境，支持 TypeScript 原生

### 构建工具

- **Vite**: `vite@^7.3.0` - 构建工具和开发服务器
- **@fresh/plugin-vite**: Fresh 的 Vite 插件
- **@tailwindcss/vite**: Tailwind CSS 4.x 的 Vite 插件

### UI 框架

- **Tailwind CSS**: `tailwindcss@^4.1.18` - 实用优先的 CSS 框架
- **DaisyUI**: `daisyui@^5.5.14` - Tailwind CSS 的组件库
- **React Icons**: `react-icons@^5.5.0` - 图标库

### 工具库

- **clsx**: `clsx@^2.1.1` - 条件类名工具
- **tailwind-merge**: `tailwind-merge@^3.4.0` - Tailwind 类名合并工具
- **@deno/kv-oauth**: `@deno/kv-oauth@^0.11.0` - GitHub OAuth 认证

## 项目结构

```
deno-fresh/
├── routes/              # 基于文件系统的路由
│   ├── _app.tsx        # 应用根布局
│   ├── _layout.tsx     # 通用布局
│   ├── index.tsx       # 首页路由
│   ├── api/            # API 路由
│   └── css/            # CSS 演示页面
├── components/         # 共享组件（服务端组件）
│   └── header-nav.tsx  # 导航栏组件
├── islands/           # 客户端交互组件（Islands 架构）
│   ├── theme-trigger.tsx
│   └── webrtc.tsx
├── tools/             # 工具函数
│   ├── utils.ts       # 定义 State 和 define 工具
│   ├── css.ts         # CSS 工具函数 (cn)
│   └── auth.ts        # 认证相关函数
├── data/              # 静态数据
│   └── static.tsx     # 菜单配置等
├── assets/            # CSS 资源（会被 Vite 处理）
│   ├── styles.css     # 主样式文件
│   └── view-transition.css
├── static/            # 静态资源（直接提供）
│   ├── css/           # 页面特定的 CSS 文件
│   └── images/        # 图片资源
├── meddleware/        # 中间件（注意拼写）
│   ├── log.ts         # 日志中间件
│   └── visite-mark.ts # 访问标记中间件
├── main.ts            # 应用入口
├── client.ts          # 客户端入口（导入 CSS）
└── vite.config.ts     # Vite 配置
```

## 核心概念

### Fresh 框架特性

1. **基于文件系统的路由**
   - `routes/` 目录下的文件自动成为路由
   - `_app.tsx` 是应用根组件
   - `_layout.tsx` 是布局组件
   - `[name].tsx` 是动态路由参数

2. **Islands 架构**
   - `islands/` 目录下的组件会在客户端激活
   - 其他组件默认是服务端组件
   - 只有需要交互的组件才放在 `islands/` 中

3. **自动链接属性**
   - Fresh 1.5+ 会自动为链接添加 `data-current` 和 `data-ancestor` 属性
   - 也可能自动添加 `aria-current="page"` 和 `aria-current="true"` 属性
   - 可以使用 CSS 选择器 `a[aria-current="page"]` 和 `a[aria-current="true"]` 来样式化

### 代码约定

1. **使用 `define` 工具定义页面和处理器**
   ```typescript
   import { define } from 'tools/utils.ts';

   export const handler = define.handlers({
     async GET(ctx) {
       // 处理器逻辑
       return ctx;
     },
   });

   export default define.page(function PageName({ Component, state }) {
     return <div>...</div>;
   });
   ```

2. **State 类型定义**
   - State 类型在 `tools/utils.ts` 中定义
   - 通过 `ctx.state` 在中间件、布局和路由之间共享数据
   - 当前 State 包含：`nikeName`, `deviceId`, `githubSessionId`

3. **CSS 类名合并**
   - 使用 `cn()` 函数（来自 `tools/css.ts`）合并类名
   - 基于 `clsx` 和 `tailwind-merge`
   ```typescript
   import { cn } from 'tools/css.ts';
   <div className={cn('base-class', condition && 'conditional-class')} />;
   ```

4. **属性命名**
   - 使用 `className` 而不是 `class`（Preact 约定）
   - 但某些原生 HTML 元素可以使用 `class`（如 `<a>`）

## 常用模式

### 创建新页面

1. 在 `routes/` 目录下创建 `.tsx` 文件
2. 使用 `define.page` 定义页面组件
3. 可选：使用 `define.handlers` 定义数据处理器

```typescript
import { define } from 'tools/utils.ts';
import { Head } from 'fresh/runtime';

export default define.page(function MyPage({ Component, state }) {
  return (
    <>
      <Head>
        <title>页面标题</title>
      </Head>
      <main>
        {/* 页面内容 */}
      </main>
    </>
  );
});
```

### 创建布局

在 `routes/_layout.tsx` 或创建新的 `routes/xxx/_layout.tsx`：

```typescript
import { define } from 'tools/utils.ts';

export default define.layout(function MyLayout({ Component, state }) {
  return (
    <div>
      <header>...</header>
      <Component />
      <footer>...</footer>
    </div>
  );
});
```

### 创建客户端交互组件（Island）

1. 在 `islands/` 目录下创建 `.tsx` 文件
2. 使用 Preact hooks（如 `useState`, `useEffect`）
3. 在服务端组件中导入使用

```typescript
// islands/my-island.tsx
import { useState } from 'preact/hooks';

export default function MyIsland() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 使用认证状态

```typescript
import { define } from 'tools/utils.ts';
import { githubGetSessionId } from 'tools/auth.ts';

export const handler = define.handlers({
  async GET(ctx) {
    const githubSessionId = await githubGetSessionId(ctx.req);
    ctx.state.githubSessionId = githubSessionId;
    return ctx;
  },
});

export default define.page(function Page({ state }) {
  const isLoggedIn = !!state.githubSessionId;
  return <div>{isLoggedIn ? '已登录' : '未登录'}</div>;
});
```

### 导航菜单配置

菜单配置在 `data/static.tsx` 中定义，使用 `MenuItem` 接口：

```typescript
export interface MenuItem {
  label: string | VNode;
  href?: string;
  children?: MenuItem[];
}
```

### 加载静态 CSS 文件

在页面中使用 `asset()` 函数加载静态 CSS：

```typescript
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';

export default define.page(function Page() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/my-page.css')} />
      </Head>
      {/* 页面内容 */}
    </>
  );
});
```

## DaisyUI 使用

项目使用 DaisyUI 组件库，常用组件：

- `navbar` - 导航栏
- `menu` - 菜单
- `btn` - 按钮
- `dropdown` - 下拉菜单
- `details` / `summary` - 折叠面板

DaisyUI 的 `menu` 组件会自动处理导航链接的样式，配合 Fresh 的自动属性添加功能，可以实现活跃链接的高亮。

## 开发命令

```bash
# 开发模式
deno task dev

# 构建
deno task build

# 启动生产服务器
deno task start

# 代码检查
deno task check

# 更新 Fresh
deno task update
```

## 注意事项

1. **中间件目录拼写**: 目录名是 `meddleware` 而不是 `middleware`（可能是拼写错误，但需要保持一致）

2. **JSX 编译**: 项目使用 Preact，JSX 会被预编译（`jsx: "precompile"`）

3. **静态资源**:
   - `assets/` 目录的文件会被 Vite 处理（CSS 会被打包）
   - `static/` 目录的文件会直接提供（不会被处理）

4. **类型安全**:
   - 使用 TypeScript，确保类型正确
   - State 类型在 `tools/utils.ts` 中统一管理

5. **服务器配置**:
   - 开发服务器端口：5030
   - 主机：`host: true`（允许外部访问）

6. **Fresh 自动功能**:
   - 链接会自动添加 `data-current`、`data-ancestor` 和 `aria-current` 属性
   - 无需手动添加这些属性即可使用 CSS 选择器样式化

## 最佳实践

1. **组件组织**:
   - 服务端组件放在 `components/`
   - 客户端交互组件放在 `islands/`
   - 尽量使用服务端组件，减少客户端 JavaScript

2. **样式管理**:
   - 全局样式在 `assets/styles.css`
   - 页面特定样式在 `static/css/` 目录
   - 使用 Tailwind CSS 工具类优先

3. **数据获取**:
   - 在 `handler` 中获取数据
   - 通过 `ctx.state` 传递给组件
   - 避免在组件中直接进行数据获取

4. **类型定义**:
   - 接口定义靠近使用位置
   - State 类型统一在 `tools/utils.ts` 管理

## 相关资源

- [Fresh 文档](https://fresh.deno.dev/)
- [Preact 文档](https://preactjs.com/)
- [Tailwind CSS 文档](https://tailwindcss.com/)
- [DaisyUI 文档](https://daisyui.com/)
