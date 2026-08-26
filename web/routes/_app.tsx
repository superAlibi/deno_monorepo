import { define } from 'tools/utils.ts';

export default define.page(function App({ Component }) {
  return (
    <html lang='zh-CN'>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>云逸尘的fresh项目</title>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
});
