import { createGitHubOAuthConfig, createHelpers } from '@deno/kv-oauth';
import type { Helpers } from '@deno/kv-oauth';

let githubAuthHelpers: Helpers | null = null;

function getGithubAuthHelpers(): Helpers {
  if (githubAuthHelpers) return githubAuthHelpers;

  const githubOauthConfig = createGitHubOAuthConfig({
    scope: 'read:user',
    redirectUri: Deno.env.get('OAUTH_REDIRECT_URI'),
  });
  githubAuthHelpers = createHelpers(githubOauthConfig);
  return githubAuthHelpers;
}

export function githubSignIn(request: Request) {
  return getGithubAuthHelpers().signIn(request);
}

export function githubSignInCallback(request: Request) {
  return getGithubAuthHelpers().handleCallback(request);
}

export function githubGetSessionId(request: Request) {
  return getGithubAuthHelpers().getSessionId(request);
}

export function githubSignOut(request: Request) {
  return getGithubAuthHelpers().signOut(request);
}
