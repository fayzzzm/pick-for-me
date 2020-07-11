import That from 'that-is';
import { copyObject } from './copy-object';

type IDeepObject<T> = {
    [K in keyof T]: T[K] extends Object ? IDeepObject<T[K]> : T[K];
};

export const copyDeep = <T, K>(dest: T, src: K) => {
    Object.keys(dest).forEach((key: string) => {
        if (src[key]) {
            const srcValue = (src as any)[key];
            if (That.isObject(srcValue)) {
                (dest as any)[key] = copyObject(srcValue);
            } else {
                (dest as any)[key] = srcValue;
            }
        }
    });

    return dest as T & K;
};
