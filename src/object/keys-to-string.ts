export const objectKeysToString = <T extends { [key: string]: any }>(
    object: T,
) => {
    const strKeys: string[] = [];
    const deepIntoKey = (
        obj: { [key: string]: any },
        keys: string[],
        isArray?: boolean,
    ) => {
        Object.keys(obj).forEach((key: string) => {
            if (Array.isArray(obj[key])) {
                deepIntoKey(obj[key], keys.concat(`${key}`), true);
            } else if (typeof obj[key] === 'object') {
                deepIntoKey(obj[key], keys.concat(`${key}.`));
            } else {
                key = isArray ? `[${key}]` : key;
                strKeys.push(
                    keys
                        .concat(key)
                        .join('')
                        .replace(/\.(\[)/g, (_, l) => l),
                );
            }
        });
    };

    deepIntoKey(object, []);

    return strKeys;
};
