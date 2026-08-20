import { parseTemplate } from 'url-template';
import { IntlMessageFormat } from 'intl-messageformat';
import { strat } from '@haltcase/strat';
const tpl = 'https://example.com/黑河/{foo}/「{bar}」';
Deno.test('strfmt', async (c) => {
  await c.step('url-template', () => {
    const template = parseTemplate(tpl);
    console.log(template.expand({ foo: 'bar', bar: '嘻嘻' }));
  });
  await c.step('intl-messageformat', () => {
    const intlMessageformat = new IntlMessageFormat(
      tpl,
      'zh-CN',
    );
    console.log(intlMessageformat.format({ foo: 'bar', bar: '嘻嘻' }));
  });
 await c.step('jsr:@haltcase/strat', () => {
    const format =  strat(tpl);
    console.log(format( { foo: 'bar', bar: '嘻嘻' }));
  });
});
