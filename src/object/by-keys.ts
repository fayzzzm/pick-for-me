import { deepGetValue } from './deep-get-value';

type InterfaceType = {
  [index: string]: any;
};

export const objectByKeys = <T = InterfaceType>(object: T, keys: string[]) =>
  keys.reduce((t: Object, key: string) => {
    const value = deepGetValue(object, key);
    (t as InterfaceType)[key] = value;

    return t;
  }, {});
