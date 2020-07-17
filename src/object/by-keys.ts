import { deepGetValue } from '@object/deep-get-value';
// eslint-disable-next-line no-unused-vars
import { RecursiveType } from '@object/types';

export const objectByKeys = <T>(object: T, keys: string[]) => {
    try {
        return keys.reduce((values, key: string) => {
            const value = deepGetValue(object, key) as RecursiveType<T>;
            values[key] = value;

            return values;
        }, {} as { [K: string]: RecursiveType<T> });
    } catch (error) {
        return error;
    }
};
