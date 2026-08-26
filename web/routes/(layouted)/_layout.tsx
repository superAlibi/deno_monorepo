import { define } from 'tools/utils.ts';

import { HeaderNavbar } from 'components/header-nav.tsx';
import { menus } from 'data/static.tsx';

export default define.layout(function cssNavLayout({ Component, state }) {
  return (
    <div class='px-4  max-w-4xl mx-auto @container/layout min-h-screen contain-inline-size'>
      <header className='flex items-center justify-between gap-10'>
        <HeaderNavbar state={state} menus={menus} />
      </header>
      <Component />
    </div>
  );
});
