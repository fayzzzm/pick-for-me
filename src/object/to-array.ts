// eslint-disable-next-line no-unused-vars
import { RecursiveType } from './types';

export const objectToArray = <T extends { [K: string]: any }>(
    object: T,
): RecursiveType<T>[] => {
    return Object.keys(object).reduce((values: any[], key: string) => {
        if (typeof object[key] === 'object') {
            values.push(objectToArray(object[key]));
        } else {
            values.push(object[key]);
        }

        return values;
    }, []);
};
