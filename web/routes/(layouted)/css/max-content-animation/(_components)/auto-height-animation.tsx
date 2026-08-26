import { cn } from 'tools/css.ts';
export default function AutoHeightAnimation() {
  return (
    <div class={cn('flex gap-4 items-center flex-col justify-center')}>
      <button class={cn('btn btn-primary peer')} type='button'>
        <span className={cn('sm:hidden')}>点击</span>
        <span className={cn('hidden sm:inline-block')}>悬浮鼠标</span>
        看看效果
      </button>
      <section
        tabIndex={0}
        className={cn(
          'h-0 overflow-hidden peer-focus:h-auto peer-hover:h-auto transition-all duration-300',
        )}
      >
        <p>Tanuki is the silent phantom of MDN.</p>
        <ul>
          <li>
            <strong>Height</strong>: 3.03m
          </li>
          <li>
            <strong>Weight</strong>: 160kg
          </li>
          <li>
            <strong>Tech Fu</strong>: 7
          </li>
          <li>
            <strong>Bad Jokes</strong>: 9
          </li>
        </ul>
      </section>
    </div>
  );
}
