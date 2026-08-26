import { define } from 'tools/utils.ts';
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';
import { cn } from 'tools/css.ts';
export default define.page(function StartAnimation() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/start-nimation.css')} />
      </Head>
      <main className={cn('py-4')}>
        <div className='container my-4'>
          <p>This is a container</p>
        </div>
        <details>
          <summary className={cn('marker:text-primary cursor-pointer')}>
            @staring-style 用于开场动画
          </summary>
          <a
            className={cn('link')}
            href='https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@starting-style'
          >
            @starting-style - MDN
          </a>
        </details>
      </main>
    </>
  );
});
