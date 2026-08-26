import { define } from 'tools/utils.ts';

export const domainMiddleware = define.middleware((ctx) => {
  const urlObj = new URL(ctx.req.url);

  if (urlObj.host.includes('fresh.lucardo.website')) {
    // 方法1: 直接修改 hostname（保留协议和路径）
    urlObj.hostname = 'fresh.luchador.dev';
    return ctx.redirect(urlObj.toString(), 301);
  }
  return ctx.next();
});
