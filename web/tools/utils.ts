import { createDefine } from 'fresh';

// This specifies the type of "ctx.state" which is used to share
// data among middlewares, layouts and routes.
export interface State {
  nikeName?: string | null;
  deviceId?: string | null;
  githubSessionId?: string;
}

/**
 * 用来定义页面、处理程序和中间件的实用程序对象。
 */
export const define = createDefine<State>();
