export const deepGetValue = <T, K>(value: T, pattern: string): any => {
    if (pattern.length === 0) {
        return value;
    } else if (typeof value !== 'object' && pattern.length) {
        throw new Error(`${typeof value} doesn't extend to Object | Array`);
    } else {
        if (/^\.?\w+/.test(pattern)) {
            const key = pattern.match(/^\.?(\w+)/)![1];
            return deepGetValue(
                (value as { [key: string]: any })[key],
                pattern.replace(/^\.?\w+/, ''),
            );
        } else if (/^\[\d+\]/.test(pattern)) {
            const index = pattern.match(/^\[(\d)\]/)![1];
            return deepGetValue(
                (value as { [key: string]: any })[index],
                pattern.replace(/^\[\d+\]/, ''),
            );
        } else {
            throw new Error(`Invalid patter for object`);
        }
    }
};
