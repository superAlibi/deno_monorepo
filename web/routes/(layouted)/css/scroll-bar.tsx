import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';
export default define.page(function ScrollBar() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/scroll-bar.css')} />
        <title>滚动条颜色</title>
      </Head>
      <main
        className={cn(
          'contain-inline-size overflow-y-hidden',
        )}
      >
        <details>
          <summary className={cn('marker:text-primary cursor-pointer')}>
            滚动条颜色
          </summary>
          在 2025 年,常见浏览器已支持该属性
        </details>
        <article
          className={cn(
            'scroll-bar-container overflow-y-auto h-50 bg-base-200 relative',
          )}
        >
          <div className=' h-[300cqi] bg-base-300 '>
            <p className='sticky inset-x-0 top-0 bg-base-300'>
              这是很长的一段内容的容器, 你可以滚动一下
            </p>
            <p className={cn('sticky inset-x-0 top-0 sm:hidden bg-base-300')}>
              在pc端,还有滚动条槽的颜色
            </p>
          </div>
        </article>
      </main>
    </>
  );
});
