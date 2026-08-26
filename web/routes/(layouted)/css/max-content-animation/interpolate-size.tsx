import { define } from 'tools/utils.ts';
import { Head } from 'fresh/runtime';
import { asset } from 'fresh/runtime';
import AutoHeightAnimation from './(_components)/auto-height-animation.tsx';
export default define.page(function MaxContentAnimation() {
  return (
    <>
      <Head>
        <link rel='stylesheet' href={asset('/css/max-content-animation.css')} />
        <title>带interpolate-size的动画</title>
      </Head>
      <AutoHeightAnimation />
    </>
  );
});
