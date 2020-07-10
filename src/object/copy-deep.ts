import That from 'that-is';
import { copyObject } from './copy-object';

type InterfaceType = {
  [index: string]: any;
};

export const copyDeep = <T = InterfaceType, S = InterfaceType>(dest: T, src: S): T => {
  Object.keys(dest).forEach((key: string) => {
    if ((src as InterfaceType)[key]) {
      const srcValue = (src as InterfaceType)[key];
      if (That.isObject(srcValue)) {
        (dest as InterfaceType)[key] = copyObject(srcValue);
      } else {
        (dest as InterfaceType)[key] = srcValue;
      }
    }
  });

  return dest;
};
