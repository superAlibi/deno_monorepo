import { define } from 'tools/utils.ts';
import { getLogger } from 'tools/logger.ts';

export const domainMiddleware = define.middleware((ctx) => {
  const logger = getLogger('domain-middleware');
  const urlObj = new URL(ctx.req.url);

  if (urlObj.host.includes('fresh.lucardo.website')) {
    const fromHost = urlObj.host;
    urlObj.hostname = 'fresh.luchador.dev';
    logger.info('redirect legacy domain', {
      from_host: fromHost,
      to_host: urlObj.host,
      path: urlObj.pathname,
      status: 301,
    });
    return ctx.redirect(urlObj.toString(), 301);
  }

  logger.debug('domain check passed', {
    host: urlObj.host,
    path: urlObj.pathname,
  });
  return ctx.next();
});
