declare type InterfaceType = {
    [index: string]: any;
};
declare class LinkedList {
    private head;
    private tail;
    length: number;
    constructor();
    private generateNode;
    isEmpty: () => boolean;
    push: (value: any) => void;
}
declare const _default: {
    deepAssign: <T = InterfaceType, S = InterfaceType>(dest: T, src: S) => T & S;
    copyDeep: <T_1 = InterfaceType, S_1 = InterfaceType>(dest: T_1, src: S_1) => T_1;
    objectByKeys: <T_2 = InterfaceType>(object: T_2, keys: string[]) => Object;
    objectKeysToString: <T_3 = InterfaceType>(object: T_3) => any;
    objectToLinkedList: <T_4 extends Object>(object: T_4) => LinkedList;
    objectToArray: <T_5 = InterfaceType>(object: T_5) => any[];
    objectToMap: <T_6 = InterfaceType>(object: T_6) => Map<string, any>;
    objectToString: (obj: Record<string, any>) => string;
};
export = _default;
