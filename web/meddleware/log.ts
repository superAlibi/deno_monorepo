import { define } from 'tools/utils.ts';

// this can also be defined via a file. feel free to delete this!
export const LoggerMiddleware = define.middleware((ctx) => {
  console.log(
    `[${Temporal.Now.zonedDateTimeISO('UTC').toPlainDateTime()}]`,
    `${ctx.req.method} ${ctx.req.url}`,
    'deviceId:',
    ctx.state.deviceId,
  );
  return ctx.next();
});
