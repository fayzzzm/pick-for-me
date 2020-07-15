const arr = [1, 2, ['s'], Promise, { a: 2, b: 3 }];

type Prototype = Exclude<keyof typeof arr, keyof Array<never>>;
type RecursionTypes<T> = T extends object
    ? {
          [K in keyof T]: K extends Prototype
              ? 'never'
              : T[K] extends Promise<infer Y>
              ? T[K]
              : T[K] extends (infer U)[]
              ? RecursionTypes<U>
              : T[K] extends object
              ? RecursionTypes<T[K]>
              : T[K];
      }[keyof T]
    : T;

export const getEntries = <T>(
    item: T | T[],
    entries: string[] = [],
): [string, RecursionTypes<T>] => {
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
        return [
            entries.map((entry) => `[${entry}]`).join(''),
            item as RecursionTypes<T>,
        ];
    }
};
