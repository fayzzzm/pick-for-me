// eslint-disable-next-line spaced-comment
/// <reference path="../types/index.d.ts" />

import That from 'that-is';

const copyObject = <T extends Object>(obj: T) => JSON.parse(JSON.stringify(obj));
const objectToString = <T extends Object>(obj: T): string => JSON.stringify(obj);

const deepAssign = <T extends Object, S extends Object>(dest: T, src: S): T & S => {
  if (objectToString(dest) === objectToString(src)) {
    return dest as any;
  }
  Object.keys(src).forEach((key: string) => {
    const srcValue = (src as any)[key];
    if ((dest as any)[key]) {
      const destValue = (dest as any)[key];
      if (That.isObject(destValue) && That.isObject(srcValue)) {
        deepAssign(destValue, srcValue);
      } else {
        // eslint-disable-next-line no-param-reassign
        (dest as any)[key] = srcValue;
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      (dest as any)[key] = srcValue;
    }
  });
  return dest as any;
};

const copyDeep = <T extends Object, S extends Object>(dest: T, src: S): T => {
  if ((dest as any) === src) {
    return dest as any;
  }

  Object.keys(dest).forEach((key: string) => {
    if ((src as any)[key]) {
      const srcValue = (src as any)[key];
      if (That.isObject(srcValue)) {
        // eslint-disable-next-line no-param-reassign
        (dest as any)[key] = copyObject(srcValue);
      } else {
        // eslint-disable-next-line no-param-reassign
        (dest as any)[key] = srcValue;
      }
    }
  });

  return dest as any;
};

export = {
  deepAssign,
  copyDeep,
};
