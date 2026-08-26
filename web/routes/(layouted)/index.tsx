import { Head } from 'fresh/runtime';
import { define } from 'tools/utils.ts';
import { githubGetSessionId } from 'tools/auth.ts';
import { cn } from 'tools/css.ts';
export const handler = define.handlers({
  async GET(ctx) {
    const githubSessionId = await githubGetSessionId(ctx.req);
    ctx.state.githubSessionId = githubSessionId;
    // return ctx.next();
    return ctx;
  },
});
const 技术栈 = [
  'fresh',
  'tailwindcss',
  'daisyui',
  'typescript',
  'deno',
  'preact',
  'vite',
];
const css相关 = [
  {
    name: 'Scroll Buttons',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition',
  },
  {
    name: 'Scroll Markers',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition',
  },
  {
    name: 'Scroll Initial Target',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition',
  },
  {
    name: 'Anchor Position',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition',
  },
  {
    name: 'Full Bleed',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition',
  },
];
export default define.page(function Home({ state }) {
  return (
    <main class='px-4  flex flex-col max-w-4xl mx-auto gap-4'>
      <Head>
        <title>首页-云逸尘的fresh项目</title>
      </Head>

      <div
        className={cn(
          'text-center text-2xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent',
        )}
      >
        欢迎您来到我的fresh项目, 当前登陆状态: {state.githubSessionId ? '已登陆' : '未登陆'}
      </div>

      <h3 className={cn('text-center text-2xl font-bold ')}>本站技术栈</h3>
      <ul className={cn('flex flex-wrap gap-2 justify-center ')}>
        {技术栈.map((item) => (
          <li
            className={cn('bg-base-200 px-2 py-1 rounded-md text-content')}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <h3 className={cn('text-center text-2xl font-bold ')}>css 相关</h3>
      <ul
        className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2')}
      >
        {css相关.map((item) => (
          <li
            className={cn('px-2 py-1 rounded-md text-content')}
            key={item.name}
          >
            <a
              class={cn('link text-blue-500')}
              href='https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/At-rules/@view-transition'
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
});
