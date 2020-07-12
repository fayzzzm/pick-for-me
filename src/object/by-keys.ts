import { deepGetValue } from './deep-get-value';

type Obj = { [index: string]: any };

export const objectByKeys = (object: Obj, keys: string[]) =>
    keys.reduce((values, key: string) => {
        const value = deepGetValue(object, key);
        values[key] = value;

        return values;
    }, {} as Obj);
