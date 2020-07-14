export const getEntries = <T>(
    item: T | T[],
    entries: string[] = [],
): [string, any] => {
    if (typeof item === 'object') {
        const _entries = Object.keys(item).reduce(
            (total: any[], key: string) => {
                total.push(getEntries((item as any)[key], entries.concat(key)));
                return total;
            },
            [],
        );

        return (_entries as any).flat();
    } else {
        return [entries.map((entry) => `[${entry}]`).join(''), item];
    }
};
