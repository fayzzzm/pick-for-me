import { deepGetValue } from './deep-get-value';

export const objectByKeys = (object: Record<string, string>, keys: string[]) =>
  keys.reduce((values, key: string) => {
    const value = deepGetValue(object, key);
    values[key] = value;

    return values;
  }, {} as Record<string, string>);
