import { objectKeysToString } from './keys-to-string';
import { deepGetValue } from './deep-get-value';

type InterfaceType = {
  [index: string]: any;
};

export const objectToMap = <T = InterfaceType>(object: T): Map<string, any> => {
  const map = new Map();
  const objectKeys = objectKeysToString(object);

  objectKeys.forEach((key: string) => map.set(key, deepGetValue(object, key)));
  return map;
};
