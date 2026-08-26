import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';
import { images } from 'data/static.tsx';
export default define.page(function ScrollDrivenAnimation() {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href={asset('/css/scroll-driven-animation.css')}
        />
      </Head>
      <main className={cn('relative', 'scroll-timeline-scope')}>
        {/* 使用 timeline-scope 后，a 标签可以放在 ul 外部仍能访问滚动时间线 */}
        <a
          href='#image-0'
          title='Scroll to top'
          className={cn(
            'size-8 bg-amber-300 fixed right-4 bottom-4 z-20 rounded-full',
            "after:content-['^'] flex items-center justify-center",
          )}
        >
        </a>
        <ul
          className={cn(
            // 外部css文件使用的class
            'scroll-driven-animation-container',
            // 容器查询设置
            '@container/list contain-size ',
            // 布局和滚动
            'overflow-y-auto relative flex flex-col gap-2 h-screen ',
            // 滚动粘贴
            'snap-y snap-mandatory scroll-smooth',
          )}
        >
          {images.map((image, index) => (
            <li
              id={`image-${index}`}
              key={index}
              className={cn(
                'size-full bg-accent-content  flex items-center justify-center  shrink-0',
                'snap-center snap-always',
              )}
            >
              <img
                className={cn('size-full object-contain')}
                src={image.src}
                alt={image.alt}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
});
