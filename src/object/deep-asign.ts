import That from 'that-is';

type Obj = { [index: string]: any };

export const deepAssign = <T extends Obj, S extends Obj>(dest: T, src: S) => {
    Object.keys(src).forEach((key: string) => {
        const srcValue = (src as any)[key];

        if (Object.prototype.hasOwnProperty.call(dest, key)) {
            const destValue = dest[key];
            if (That.isObject(destValue) && That.isObject(srcValue)) {
                deepAssign(destValue, srcValue);
            } else {
                (dest as Obj)[key] = srcValue;
            }
        } else {
            (dest as Obj)[key] = srcValue;
        }
    });

    return dest as T & S;
};
