import { App, staticFiles } from 'fresh';
import { type State } from 'tools/utils.ts';
import { LoggerMiddleware } from './meddleware/log.ts';
import { visiteMarkMiddleware } from './meddleware/visite-mark.ts';
import { domainMiddleware } from './meddleware/domain.ts';
export const app = new App<State>();

app.use(staticFiles());

app.use(visiteMarkMiddleware);
app.use(domainMiddleware);
// this is the same as the /api/:name route defined via a file. feel free to delete this!
app.get('/api2/:name', (ctx) => {
  const name = ctx.params.name;
  return new Response(
    `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`,
  );
});

app.use(LoggerMiddleware);

// Include file-system based routes here
app.fsRoutes();
