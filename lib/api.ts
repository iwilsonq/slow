export const BASE_URL = 'https://iwilsonq.com';

export function stringify(obj: {
  [key: string]: string | number;
}): string {
  if (Object.keys(obj).length === 0) return '';

  let result: string[] = [];
  for (const key in obj) {
    if (obj[key] == null) continue;

    result.push(`${key}=${obj[key]}`);
  }

  return `?${result.join('&')}`;
}
