import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
export default define.layout(function MaxContentAnimationLayout({ Component }) {
  return (
    <main className='max-w-4xl mx-auto p-2'>
      <details>
        <summary className={cn('marker:text-primary cursor-pointer')}>
          解决了什么痛点
        </summary>
        <p className={cn('break-keep')}>
          之前, 要实现一个高度不确定的元素, 在高度为0时和其不确定高度之间切换过度动画,
          通过纯css是做不到的

          需要使用js来实现.

          现在可以通过设置interpolate-size属性为allow-keywords来实现这个效果了.
        </p>
      </details>
      <h4 className={cn('text-lg font-bold')}>参考连接</h4>
      <a
        class={cn('link')}
        href='https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/interpolate-size'
      >
        interpolate-size - MDN
      </a>
      <div role='tablist' className='tabs tabs-box mx-auto w-fit my-4'>
        <a
          role='tab'
          className={cn('tab')}
          href='/css/max-content-animation/not-interpolate-size'
        >
          没有interpolate-size
        </a>
        <a
          role='tab'
          className={cn('tab')}
          href='/css/max-content-animation/interpolate-size'
        >
          有interpolate-size
        </a>
      </div>
      <Component />
    </main>
  );
});
