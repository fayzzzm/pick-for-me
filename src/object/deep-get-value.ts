export const deepGetValue = <T extends { [key: string]: any }>(
    value: T,
    pattern: string,
): any => {
    if (pattern.length === 0) {
        return value;
    } else {
        if (/^\.?\w+/.test(pattern)) {
            const key = (pattern.match(/^\.?(\w+)/) || [])[1];
            return deepGetValue(value[key], pattern.replace(/^\.?\w+/, ''));
        } else if (/^\[\d+\]/.test(pattern)) {
            const index = (pattern.match(/^\[(\d)\]/) || [])[1];
            return deepGetValue(value[index], pattern.replace(/^\[\d+\]/, ''));
        } else {
            return 'invalid';
        }
    }
};
