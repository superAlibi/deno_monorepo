import { define } from 'tools/utils.ts';
import { formatError, getLogger } from 'tools/logger.ts';

export const LoggerMiddleware = define.middleware(async (ctx) => {
  const logger = getLogger('http');
  const { method, url } = ctx.req;
  const pathname = new URL(url).pathname;
  const start = performance.now();

  try {
    const response = await ctx.next();
    const durationMs = (performance.now() - start).toFixed(1);
    const deviceId = ctx.state.deviceId ?? '-';

    logger.info(`${method} ${pathname}`, {
      status: response.status,
      duration_ms: Number(durationMs),
      device_id: deviceId,
    });

    return response;
  } catch (error) {
    const durationMs = (performance.now() - start).toFixed(1);
    logger.error(`${method} ${pathname}`, {
      duration_ms: Number(durationMs),
      error: formatError(error),
    });
    throw error;
  }
});
