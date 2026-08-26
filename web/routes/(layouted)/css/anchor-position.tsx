import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';

export default define.page(function AnchorPosition() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/anchor-position.css')} />
      </Head>
      <main
        className={cn(
          'anchor-position-container @container/main contain-inline-size py-4',
        )}
      >
        <details>
          <summary className={cn('marker:text-primary cursor-pointer')}>
            锚点定位能力
          </summary>
          <p>
            锚点定位能力是CSS中的一种定位方式, 它可以让元素相对于其锚点位置进行定位.
          </p>
          <h3 className={cn('text-lg font-bold')}>参考连接</h3>
          <ul>
            <li>
              <a
                class={cn('link ')}
                href='https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Using'
              >
                使用锚点定位 - MDN
              </a>
            </li>
            <li>
              <a
                class={cn('link ')}
                href='https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding'
              >
                处理锚点元素边界溢出情况 - MDN
              </a>
            </li>
            <li>
              <a
                class={cn('link ')}
                href='https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/anchor'
              >
                anchor() 函数 - MDN
              </a>
            </li>
          </ul>
        </details>

        <div className={cn('h-[80cqmin] flex items-center justify-center')}>
          <button type='button' className={cn('btn anchor-button w-24')}>
            锚点
          </button>
          <div
            className={cn(
              // 外部引用css使用
              'infobox',
              // base
              'bg-base-200 p-4 rounded-md',
            )}
          >
            <p>使用anchor函数设置锚点</p>
          </div>

          <div
            className={cn(
              // 外部引用css使用
              'position-area-box',
              // base
              'bg-base-200 p-4 rounded-md',
            )}
          >
            <p>使用position-area属性设置锚点</p>
          </div>
          <div
            className={cn(
              // 外部引用css使用
              'with-anchor-width',
              // base
              'bg-base-200 p-4 rounded-md',
            )}
          >
            <p>锚点宽度计算</p>
          </div>
        </div>

        <h3>position-area属性示意图</h3>
        <img
          src={asset('/images/position-area.svg')}
          alt='position-area'
          className={cn('w-full')}
        />
      </main>
    </>
  );
});
