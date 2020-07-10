import That from 'that-is';

type InterfaceType = {
  [index: string]: any;
};

export const objectKeysToString = <T = InterfaceType>(object: T): any => {
  const strKeys: any = [];
  const deepIntoKey = (obj: any, keys: string[]) => {
    Object.keys(obj).forEach((key: string) => {
      if (That.isObject(obj[key])) {
        deepIntoKey(obj[key], keys.concat(`${key}.`));
      } else if (That.isArray(obj[key])) {
        deepIntoKey(obj[key], keys.concat(`[${key}]`));
      } else {
        strKeys.push(keys.concat(key).join(''));
      }
    });
  };

  deepIntoKey(object, []);

  return strKeys;
};
