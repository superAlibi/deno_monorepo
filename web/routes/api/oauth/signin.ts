import { define } from 'tools/utils.ts';
import { githubSignIn } from 'tools/auth.ts';

export const handler = define.handlers({
  GET(ctx) {
    return githubSignIn(ctx.req);
  },
});
