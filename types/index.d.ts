type IObject = Record<string, any>;
declare interface IPickFunctions {
  fieldsByKeys: (object: IObject, keys: string[]) => string[];
  arrayRange: <T>(array: T[], startIndex?: number, endIndex?: number) => T[];
  depthOfArray: (array: any[]) => number;
  nthSquareOfTwo: (n: number) => number;
}

declare interface IPickConvertFunctions {
    stringToRegex: (pattern: string, flags?: ['g', 'i', 'm']) => RegExp;
}

declare module 'that-is';
