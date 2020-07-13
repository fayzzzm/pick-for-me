export const depthOfArray = <T>(array: T[] | T) => {
    if (Array.isArray(array)) {
        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < array.length; i++) {
            const depth = 1 + depthOfArray(array[i]);
            max = Math.max(max, depth);
        }

        return max;
    } else {
        return 0;
    }
};
