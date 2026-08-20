import { Span } from './using.ts';

Deno.test('using', () => {
  using _span = new Span('playground');

  // const now = Temporal.Now.zonedDateTimeISO(Temporal.Now.timeZoneId());
  const now = Temporal.Now.zonedDateTimeISO(Intl.DateTimeFormat().resolvedOptions().timeZone);
  console.log(`now: ${now.toString()}`);
});

