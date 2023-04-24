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

export function convertUnixTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // конвертируем в миллисекунды
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
