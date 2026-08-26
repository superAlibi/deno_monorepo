import { asset } from 'fresh/runtime';
import { MenuItem } from '../components/header-nav.tsx';

export const images = [
  {
    src: asset('/images/web-scroll/Entertainment.svg'),
    label: '即兴漫步',
    description: '享受音乐带来的自由与快乐，让节奏引领你的每一步。',
    alt: '一幅黑白画，描绘了一个卷发的人，穿着夹克和裤子，手里拿着一个看起来像小型媒体播放器的设备',
  },
  {
    src: asset('/images/web-scroll/Mechanical+Love.svg'),
    label: '机械之爱',
    description: '在科技与情感的交汇处，发现人与人之间最真挚的连接。',
    alt: '一幅黑白画，描绘了两个人并排站着，互相拥抱，都背着背包',
  },
  {
    src: asset('/images/web-scroll/New+Beginnings.svg'),
    label: '新的开始是美好的',
    description:
      '每一次新的开始都蕴含着无限可能，让我们以开放的心态拥抱变化，在知识的海洋中不断探索，发现真理与智慧的光芒。',
    alt: '一幅黑白画，描绘了一个人坐在扶手椅上读书，椅子上有连接到这个人的电线',
  },
  {
    src: asset('/images/web-scroll/Roboto.svg'),
    label: '赛博跳跃者',
    description: '探索未来世界的冒险之旅，体验科技与人类智慧的完美结合。',
    alt: '一幅黑白线条画，描绘了一个穿着夹克、裤子和头盔的未来主义人物大步向前',
  },
  {
    src: asset('/images/web-scroll/Waiting.svg'),
    label: '耐心等待',
    description: '在宁静中寻找内心的平衡，学会在等待中发现生活的美好。',
    alt: '一幅黑白画，描绘了一个盘腿坐着的人',
  },
];

/**
 * 菜单配置
 */
export const menus: MenuItem[] = [
  {
    label: '首页',
    href: '/',
    className: 'lg:hidden',
  },
  {
    label: '案例',
    children: [
      {
        label: 'CSS',
        href: '/css',
      },
    ],
  },

  {
    label: '其他站点',
    children: [
      {
        label: '博客&笔记',
        href: 'https://notes.lucardo.website',
      },
      {
        label: 'react-router 7',
        href: 'https://remix.lucardo.website',
      },
    ],
  },
  {
    label: (
      <>
        github逛逛
      </>
    ),
    href: 'https://github.com/superAlibi',
  },
];
