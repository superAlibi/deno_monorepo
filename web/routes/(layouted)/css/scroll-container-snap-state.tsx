import { asset, Head } from 'fresh/runtime';
import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
import { images } from 'data/static.tsx';

const 知识点 = [
  'Scroll Buttons',
  'Scroll Markers',
  'Scroll-State Queries',
  'Scroll Initial Target',
  'Anchor Position',
  'Full Bleed',
];
export default define.page(function cssScrollDefaultPage() {
  return (
    <main
      className={cn(
        'max-w-[100cqi] overflow-hidden  @container/main contain-inline-size',
      )}
    >
      <Head>
        <link
          rel='stylesheet'
          href={asset('/css/scroll-container-snap-state.css')}
        />
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
          水平滚动的卡片
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
          每次滚动, 都有一张图片在滚动区域的最中间
        </h4>
      </article>
      <ul
        class={cn(
          // 引用的css文件使用的class
          'snap-x-container',
          // 基本 设置滚动区域的锚点
          'relative overflow-x-auto flex items-center gap-4 py-4 px-10 contain-size @container/list snap-x snap-mandatory scroll-smooth',
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
              'relative rounded-xl shrink-0 overflow-hidden snap-center snap-always last:mr-[30cqb] first:ml-[30cqb]',
              // mobile
              'h-[100cqi] aspect-square',
              // 平板或以上
              'md:size-[40cqi]',
            )}
          >
            <figure>
              <picture>
                <img
                  src={image.src}
                  alt={image.alt}
                />
              </picture>
              <figcaption
                className={cn(
                  'transition-all duration-300 opacity-100 translate-y-full  text-white/90',
                  'absolute left-0 right-0 bottom-0 p-4 pt-6',
                  // 背景
                  'bg-linear-to-b from-transparent  to-black/75',
                )}
              >
                <h5 className={cn('text-2xl font-bold')}>{image.label}</h5>
                <p>{image.description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </main>
  );
});
