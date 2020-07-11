export const copyObject = <T>(obj: T) => JSON.parse(JSON.stringify(obj)) as T;
