import { define } from 'tools/utils.ts';
import { getCookies, setCookie } from '@std/http';
import { getLogger } from 'tools/logger.ts';
export const visiteTagCookieName = 'd';

/**
 * 访问标记中间件
 */
export const visiteMarkMiddleware = define.middleware((ctx) => {
  const logger = getLogger('visit-mark-middleware');
  const headers = ctx.req.headers;
  const cookies = getCookies(headers);

  const map = new Map(Object.entries(cookies));
  const tag = map.get(visiteTagCookieName) ?? crypto.randomUUID();
  const isNewTag = !map.has(visiteTagCookieName);
  ctx.state.deviceId = tag ?? null;
  logger.debug('resolve visit tag', {
    created: isNewTag,
    device_id: tag,
  });

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
    logger.debug('set visit tag cookie', {
      cookie_name: visiteTagCookieName,
      expires_ms: tagExpiredDate,
    });
    return resp;
  });
});
