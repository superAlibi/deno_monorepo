import { createGitHubOAuthConfig, createHelpers } from '@deno/kv-oauth';

const githubOauthConfig = createGitHubOAuthConfig({
  scope: 'read:user',
  redirectUri: Deno.env.get('OAUTH_REDIRECT_URI'),
});
export const {
  signIn: githubSignIn,
  handleCallback: githubSignInCallback,
  getSessionId: githubGetSessionId,
  signOut: githubSignOut,
} = createHelpers(githubOauthConfig);
