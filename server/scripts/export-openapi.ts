import { dirname, fromFileUrl, join } from 'jsr:@std/path@1';
import app from '../src/app.ts';

const doc = app.getOpenAPIDocument({
  openapi: '3.0.0',
  info: {
    title: 'HTTP Test (Hono + zod-openapi)',
    version: '1.0.0',
    description: '基于 @hono/zod-openapi 的 OpenAPI 自动生成（Deno）',
  },
});

const outPath = join(
  dirname(fromFileUrl(import.meta.url)),
  '../../web/openapi.json',
);

await Deno.writeTextFile(outPath, `${JSON.stringify(doc, null, 2)}\n`);
console.log(`Wrote ${outPath}`);
