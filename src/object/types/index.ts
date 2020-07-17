type GoRecursive<T, K extends keyof T> = T[K] extends (infer Y)[]
    ? RecursiveType<Y>
    : T[K] extends Promise<any>
    ? T[K]
    : T[K] extends object
    ? RecursiveType<T[K]>
    : T[K];

export type RecursiveType<T> = T extends Array<any>
    ? {
          [K in keyof T]: GoRecursive<T, K>;
      }[number]
    : T extends Promise<any>
    ? T
    : T extends object
    ? { [K in keyof T]: GoRecursive<T, K> }[keyof T]
    : T;
