import That from 'that-is';
import { LinkedList } from 'src/linked-list';

export const objectToLinkedList = <T extends Object>(object: T): LinkedList => {
    const list = new LinkedList();
    const rec = (value: any): void => {
        Object.keys(value).forEach((key: string) => {
            if (That.isObject(value[key])) {
                rec(value[key]);
            } else {
                list.push(value[key]);
            }
        });
    };

    rec(object);
    return list;
};
