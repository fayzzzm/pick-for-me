import { LinkedList } from 'src/linked-list';
// eslint-disable-next-line no-unused-vars
import { RecursiveType } from '@object/types';

export const objectToLinkedList = <T extends { [K: string]: RecursiveType<T> }>(
    object: T,
): LinkedList<RecursiveType<T>> => {
    const list = new LinkedList<RecursiveType<T>>();
    const getValues = (
        value: RecursiveType<T> | { [key: string]: RecursiveType<T> },
    ): void => {
        for (const keys in value as T) {
            if (typeof value === 'object')
                getValues((value as { [key: string]: RecursiveType<T> })[keys]);
            else list.push(value);
        }
    };

    getValues(object);
    return list;
};
