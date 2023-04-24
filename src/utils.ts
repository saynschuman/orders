import { ProjectParams } from "./types";

export function getRequestUrl(path: string, query: ProjectParams = {}) {
  let urlQueryString = getEncodedQueryParamsString(query);
  if (urlQueryString) {
    urlQueryString = `?${urlQueryString}`;
  }
  return `${path}${urlQueryString}`;
}

function getEncodedQueryParamsString(query: ProjectParams = {}): string {
  return Object.entries(query)
    .map(([key, value]) => {
      return `${key}=${encodeURIComponent(value)}`;
    })
    .join("&");
}

export function copyToClipboard(text: string | null) {
  if (!text) throw Error();
  return navigator.clipboard.writeText(text);
}
