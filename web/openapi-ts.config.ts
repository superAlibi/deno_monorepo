import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: './openapi.json',
  output: {
    path: 'generated/api',
    // Deno 要求相对导入带扩展名
    importFileExtension: '.ts',
  },
  plugins: [
    '@hey-api/typescript',
    {
      name: '@hey-api/sdk',
      operations: { strategy: 'flat' },
      paramsStructure: 'flat',
    },
    '@hey-api/client-fetch',
  ],
});
