import { objectKeysToString } from './keys-to-string';
import { deepGetValue } from './deep-get-value';

export const objectToMap = <T extends { [key: string]: any }>(
    object: T,
): Map<string, any> => {
    const map = new Map();
    const objectKeys = objectKeysToString(object);

    objectKeys.forEach((key: string) =>
        map.set(key, deepGetValue(object, key)),
    );
    return map;
};
