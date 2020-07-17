import { objectKeysToString } from '@object/keys-to-string';
import { deepGetValue } from '@object/deep-get-value';
// eslint-disable-next-line no-unused-vars
import { RecursiveType } from '@object/types';

export const objectToMap = <T extends { [key: string]: any }>(
    object: T,
): Map<string, RecursiveType<T>> => {
    const map = new Map();
    const objectKeys = objectKeysToString(object);

    objectKeys.forEach((key: string) =>
        map.set(key, deepGetValue(object, key)),
    );
    return map;
};
