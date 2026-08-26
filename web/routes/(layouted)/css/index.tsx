import { define } from 'tools/utils.ts';
import { cn } from 'tools/css.ts';
const demos = [
  {
    label: '滚动&容器粘贴状态',
    href: '/css/scroll-container-snap-state',
  },
  {
    label: '滚动&锚点&标记',
    href: '/css/scroll-mark',
  },
  {
    label: '锚点定位能力',
    href: '/css/anchor-position',
  },
  {
    label: '最大内容动画',
    href: '/css/max-content-animation',
  },
  {
    label: '滚动条',
    href: '/css/scroll-bar',
  },
  {
    label: '加载/进度条',
    href: '/css/progress',
  },
  {
    label: '加载/进度条 - rgb',
    href: '/css/progress-rgb',
  },
  {
    label: 'webrtc',
    href: '/webrtc',
  },
  {
    label: '动画时间线',
    href: '/css/animatioin-timeline',
  },
  {
    label: '时间线',
    href: '/timeline',
  },
  {
    label: '滚动驱动动画',
    href: '/scroll-driven-animation',
  },
];
export default define.page(function cssIndexPage() {
  return (
    <ul className='grid grid-cols-1 @lg:grid-cols-2 @2xl:grid-cols-3 gap-8  md:p-8  @container/list contain-inline-size min-h-[200px]'>
      {demos.map((demo) => (
        <li
          className={cn(
            'h-[50cqi] @md/list:h-[30cqi] bg-base-200 px-2 py-1 rounded-md text-content text-center transition-all duration-300',
            'hover:bg-base-300 hover:scale-105',
            'group shadow-md shadow-primary-200 hover:shadow-lg hover:shadow-primary-300',
          )}
          key={demo.label}
        >
          <a
            className='link inline-flex items-center justify-center  size-full group-hover:text-primary'
            href={demo.href}
          >
            {demo.label}
          </a>
        </li>
      ))}
    </ul>
  );
});
