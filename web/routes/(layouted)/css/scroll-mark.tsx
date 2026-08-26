import { asset, Head } from 'fresh/runtime';
import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';

import { images } from 'data/static.tsx';
const 知识点 = [
  'Scroll Buttons',
  'Scroll Markers',
  'Scroll Initial Target',
  'Anchor Position',
  'Full Bleed',
];
export default define.page(function Home() {
  return (
    <main
      className={cn(
        'max-w-[100cqi] overflow-hidden @container/main contain-inline-size',
      )}
    >
      <Head>
        <link rel='stylesheet' href={asset('/css/scroll-mark.css')} />
      </Head>
      <article
        className={cn(
          // 基本
          'flex flex-col gap-4 text-center',
          '',
          // 平板或以上
          'lg:max-w-[50cqi] lg:mx-auto ',
        )}
      >
        <h3 className='text-center text-2xl font-bold'>
          水平滚动的卡片 & 标记
        </h3>

        <p className='flex gap-2 flex-wrap text-center justify-center'>
          {知识点.map((item) => (
            <span
              class={cn(
                'bg-base-200 px-2 py-1 rounded-md text-content',
                'whitespace-nowrap',
              )}
              key={item}
            >
              {item}
            </span>
          ))}
        </p>
        <h4>
          滚动到当前卡片时, 卡片会有一个蓝色的标记
        </h4>
      </article>
      <ul
        class={cn(
          // 引用的css文件使用的class
          'snap-x-container',
          // base
          'overflow-x-auto flex items-center gap-4 snap-x snap-mandatory scroll-smooth contain-size',
          // 移动端
          'size-[100cqi]',
          // 平板或以上
          'md:h-[400px] lg:w-full ',
        )}
      >
        {images.map((image, index) => (
          <li
            key={index}
            tabIndex={index}
            className={cn(
              // base
              'shrink-0 bg-white/30 relative  rounded-xl @container/item last:mr-[30cqb] first:ml-[30cqb]',
              ' size-[40cqb] aspect-square',
              ' snap-center snap-always',
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </main>
  );
});
