import { createGitHubOAuthConfig, createHelpers } from '@deno/kv-oauth';
const githubOauthConfig = createGitHubOAuthConfig({
  scope: 'read:user',
});
export const {
  signIn: githubSignIn,
  handleCallback: githubSignInCallback,
  getSessionId: githubGetSessionId,
  signOut: githubSignOut,
} = createHelpers(githubOauthConfig);
