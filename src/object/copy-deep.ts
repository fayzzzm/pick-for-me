import That from 'that-is';
import { copyObject } from './copy-object';

type Obj = { [index: string]: any };

export const copyDeep = <T extends Obj, K extends Obj>(dest: T, src: K) => {
    Object.keys(dest).forEach((key: string) => {
        if (src[key]) {
            const srcValue = src[key];
            if (That.isObject(srcValue)) {
                (dest as Obj)[key] = copyObject(srcValue);
            } else {
                (dest as Obj)[key] = srcValue;
            }
        }
    });

    return dest as T & K;
};
