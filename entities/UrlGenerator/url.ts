const HTTP = 'http'
const HTTPS = 'https'
const DIVIDER = '://'
type Protocol = typeof HTTP | typeof HTTPS

export function unifyUrlProtocol(url: string, protocol: Protocol = HTTPS): string {
    if(url.startsWith(HTTP + DIVIDER) || url.startsWith(HTTPS + DIVIDER)) return url;

    return protocol + DIVIDER + url;
}