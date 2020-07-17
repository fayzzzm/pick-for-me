// eslint-disable-next-line no-unused-vars
import { RecursiveType } from '@object/types';

export const getEntries = <T>(
    item: T | T[],
    entries: string[] = [],
): [string, RecursiveType<T>] => {
    if (typeof item === 'object') {
        const _entries = Object.keys(item).reduce(
            (total: any[], key: string) => {
                total.push(
                    getEntries(
                        (item as { [key: string]: any })[key],
                        entries.concat(key),
                    ),
                );
                return total;
            },
            [],
        );

        return (_entries as any).flat();
    } else {
        return [
            entries.map((entry) => `[${entry}]`).join(''),
            item as RecursiveType<T>,
        ];
    }
};
