type RecursiveType<T> = T extends (infer Z)[]
    ? {
          [K in keyof T]: T[K] extends infer Z
              ? RecursiveType<Z>
              : T[K] extends object
              ? RecursiveType<T[K]>
              : T[K];
      }[number]
    : T extends Promise<infer D>
    ? T
    : T extends object
    ? {
          [K in keyof T]: T[K] extends (infer F)[]
              ? RecursiveType<F>
              : T[K] extends object
              ? RecursiveType<T[K]>
              : T[K];
      }[keyof T]
    : T;

export const getEntries = <T>(
    item: T | T[],
    entries: string[] = [],
): [string, RecursiveType<T>] => {
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
            item as RecursiveType<T>,
        ];
    }
};
