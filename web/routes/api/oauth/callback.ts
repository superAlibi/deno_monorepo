import { define } from 'tools/utils.ts';
import { githubSignInCallback } from 'tools/auth.ts';
import { formatError, getLogger } from 'tools/logger.ts';

async function getTokenExchangeErrorBody(error: unknown): Promise<string | undefined> {
  if (!error || typeof error !== 'object' || !('response' in error)) return undefined;
  const response = (error as { response?: unknown }).response;
  if (!(response instanceof Response)) return undefined;

  try {
    const body = await response.clone().json();
    return JSON.stringify(body);
  } catch {
    return await response.clone().text();
  }
}

export const handler = define.handlers({
  async GET(ctx) {
    const logger = getLogger('oauth-callback');
    try {
      const { response, tokens: _tokens } = await githubSignInCallback(ctx.req);

      return response;
    } catch (error) {
      const responseBody = await getTokenExchangeErrorBody(error);
      logger.error('github oauth callback failed', {
        path: new URL(ctx.req.url).pathname,
        error: formatError(error),
        token_exchange_response: responseBody,
      });
      throw error;
    }
  },
});
