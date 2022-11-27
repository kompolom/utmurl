import { unifyUrlProtocol } from './url'
import { cleanUpString } from './translit'

export class UrlGenerator {
  #url: URL;

  constructor(url: string) {
    this.#url = new URL(unifyUrlProtocol(url));
  }

  /**
   * Build resulting url
   */
  build(params: Record<string, string>): string {
    for (const entry of Object.entries(params)) {
      if (!entry[1]) continue;
      this.setParam(entry[0], cleanUpString(entry[1]));
    }
    let url = this.#url.toString()
    url = url.replaceAll('%7B', '{')
    url = url.replaceAll('%7D', '}')
    return url;
  }

  setParam(name: string, value: string): void {
    this.#url.searchParams.set(name, value);
  }
}
