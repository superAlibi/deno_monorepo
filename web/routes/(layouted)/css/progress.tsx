import { asset, Head } from 'fresh/runtime';
import { define } from 'tools/utils.ts';

export default define.page(function Progress() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/progress.css')} />
      </Head>
      <main className='max-w-4xl mx-auto flex justify-center items-center size-[100cqi]'>
        <div className='circle'>
          <div className='indicator'></div>
        </div>
      </main>
    </>
  );
});
