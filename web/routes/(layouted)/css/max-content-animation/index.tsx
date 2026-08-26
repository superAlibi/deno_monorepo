import { define } from 'tools/utils.ts';

export const handler = define.handlers((ctx) => {
  return ctx.redirect('/css/max-content-animation/not-interpolate-size');
});
