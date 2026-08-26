import { define } from 'tools/utils.ts';
import { Head } from 'fresh/runtime';
import AutoHeightAnimation from './(_components)/auto-height-animation.tsx';
export default define.page(function MaxContentAnimation() {
  return (
    <>
      <Head>
        <title>不带interpolate-size</title>
      </Head>
      <AutoHeightAnimation />
    </>
  );
});
