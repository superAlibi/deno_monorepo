import { asset, Head } from 'fresh/runtime';
import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';

export default define.page(function Progress() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/progress-rgb.css')} />
      </Head>
      <main className='max-w-4xl mx-auto flex flex-col gap-3 justify-center items-center size-[100cqi]'>
        <h1>加载/进度条 - rgb</h1>
        <p className={cn('text-sm text-gray-500')}>tip: 我抄的</p>
        <div class='loader'>
          <div class='circle'>
            <span></span>
          </div>
        </div>
      </main>
    </>
  );
});
