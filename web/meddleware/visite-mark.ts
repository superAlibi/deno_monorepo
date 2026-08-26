import { define } from 'tools/utils.ts';
import { getCookies, setCookie } from '@std/http';
export const visiteTagCookieName = 'd';

/**
 * 访问标记中间件
 */
export const visiteMarkMiddleware = define.middleware((ctx) => {
  const headers = ctx.req.headers;
  const cookies = getCookies(headers);

  const map = new Map(Object.entries(cookies));
  const tag = map.get(visiteTagCookieName) ?? crypto.randomUUID();
  ctx.state.deviceId = tag ?? null;

  return ctx.next().then((resp) => {
    const timenow = Temporal.Now.zonedDateTimeISO('UTC');
    const tagExpiredDate = timenow.add({ years: 1 }).epochMilliseconds;
    setCookie(resp.headers, {
      name: visiteTagCookieName,
      value: tag,
      httpOnly: true,
      path: '/',
      sameSite: 'Lax',
      expires: tagExpiredDate,
    });
    return resp;
  });
});
