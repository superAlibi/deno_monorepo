/**
 * 时间跨度
 */
export class Span implements Disposable {
  #label: string;
  #start: Temporal.Instant;

  /**
   * 标签名称
   * @param label 标签
   */
  constructor(label: string) {
    this.#label = label;
    this.#start = Temporal.Now.instant();
    console.log(`[${label}] start`);
  }

  /**
   * 释放
   */
  [Symbol.dispose](): void {
    const elapsed = Temporal.Now.instant().since(this.#start);
    console.log(`[${this.#label}] end (${elapsed.total('milliseconds')}ms)`);
  }
}

function main() {
  using _span = new Span('playground');

  // const now = Temporal.Now.zonedDateTimeISO(Temporal.Now.timeZoneId());
  const now = Temporal.Now.zonedDateTimeISO(Intl.DateTimeFormat().resolvedOptions().timeZone);
  console.log(`now: ${now.toString()}`);
}
if (import.meta.main) {
  main();
}
