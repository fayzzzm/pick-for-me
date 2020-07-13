export const arrayRange = <T>(
    array: T[],
    startIndex?: number,
    endIndex?: number,
) => {
    const { length } = array;
    return [...array].slice(startIndex || 0, endIndex || length);
};
