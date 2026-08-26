import { FaSignOutAlt } from 'react-icons/fa';
import { State } from 'tools/utils.ts';
import { VNode } from 'preact';

export interface MenuItem {
  className?: string;
  label: string | VNode;
  href?: string;
  children?: MenuItem[];
}

export interface HaderNavbarProps {
  state: State;
  menus: MenuItem[];
  logo?: VNode;
  trigger?: VNode;
}

function MenuItemComponent(props: MenuItem) {
  const { label, href, children, className } = props;

  if (Array.isArray(children) && children.length) {
    return (
      <li>
        <details>
          <summary>{label}</summary>
          <ul className='bg-base-100 rounded-t-none p-2'>
            {children.map((child) => <MenuItemComponent key={child.label} {...child} />)}
          </ul>
        </details>
      </li>
    );
  }
  return (
    <li className={className}>
      <a
        href={href}
        className="whitespace-nowrap aria-[current='page']:text-primary"
      >
        {label}
      </a>
    </li>
  );
}

export function HeaderNavbar(props: HaderNavbarProps) {
  const { state, logo, menus, trigger } = props;
  return (
    <div className='navbar bg-base-100 shadow-sm relative z-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          {trigger ?? (
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
          )}
          <ul className='menu menu-lg md:menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-audo p-2 shadow'>
            {menus.map((menu) => (
              <MenuItemComponent
                key={menu.label}
                {...menu}
              />
            ))}
          </ul>
        </div>
        {logo ?? (
          <a href='/' className='btn btn-ghost text-xl hidden md:flex'>
            fresh 案例
          </a>
        )}
      </div>
      <div className='navbar-center  hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {menus.map((menu) => (
            <MenuItemComponent
              key={menu.label}
              {...menu}
            />
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        {state.githubSessionId
          ? (
            <a
              title='Sign out'
              href='/api/oauth/signout'
              class='btn btn-square rounded-full'
            >
              退出登录<FaSignOutAlt size={24} />
            </a>
          )
          : (
            <a
              title='使用 GitHub 登录'
              href='/api/oauth/signin'
              type='button'
              className='btn btn-outline '
            >
              使用 GitHub 登录
              {/* <FaGithub size={24} /> */}
            </a>
          )}
      </div>
    </div>
  );
}
