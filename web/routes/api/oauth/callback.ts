import { define } from 'tools/utils.ts';
import { githubSignInCallback } from 'tools/auth.ts';

export const handler = define.handlers({
  async GET(ctx) {
    const { response, tokens: _tokens } = await githubSignInCallback(ctx.req);

    return response;
  },
});
