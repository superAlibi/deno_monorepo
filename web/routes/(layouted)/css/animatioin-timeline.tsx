import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';
import { images } from 'data/static.tsx';
export default define.page(function AnimationTimeline() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/animation-timeline.css')} />
      </Head>
      <main
        className={cn(
          ' overflow-hidden relative py-4',
        )}
      >
        <details className={cn('my-4')}>
          <summary className={cn('marker:text-primary cursor-pointer')}>
            滚动时间线
          </summary>
          <p>
            随着你的向下滚动, 滚动区域有一个红色的进度条 :)
          </p>
          <h3 className={cn('text-lg font-bold')}>参考资料</h3>
          <ul>
            <li>
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines'
                target='_blank'
                className={cn('link')}
              >
                MDN Timelines
              </a>
            </li>
            <li>
              <a
                class={cn('link')}
                href='https://scroll-driven-animations.style/demos/cover-flow/css/'
                target='_blank'
              >
                一些华丽的demo
              </a>
            </li>
          </ul>
        </details>
        <div
          className={cn(
            'size-[80cqi] mx-auto overflow-hidden',
          )}
        >
          <ul
            className={cn(
              'scroll-container overflow-y-auto relative flex flex-col gap-2 h-full',
              'flex flex-col gap-2 items-center mx-auto @container/list contain-inline-size ',
              'snap-y snap-mandatory scroll-smooth',
            )}
          >
            {images.map((image, index) => (
              <li
                key={index}
                className={cn(
                  'first:mt-2.5 last:mb-2.5',
                  'size-[90cqi] bg-accent-content  flex items-center justify-center  shrink-0',
                  'snap-center snap-always',
                )}
              >
                <img src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
});
