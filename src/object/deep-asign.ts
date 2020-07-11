import That from 'that-is';

export const deepAssign = <T = any>(dest: T, src: S): T & S => {
    Object.keys(src).forEach((key: string) => {
        const srcValue = (src as InterfaceType)[key];

        if (Object.prototype.hasOwnProperty.call(dest, key)) {
            const destValue = (dest as InterfaceType)[key];
            if (That.isObject(destValue) && That.isObject(srcValue)) {
                deepAssign(destValue, srcValue);
            } else {
                (dest as InterfaceType)[key] = srcValue;
            }
        } else {
            (dest as InterfaceType)[key] = srcValue;
        }
    });

    return dest as T & S;
};
