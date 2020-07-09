"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const that_is_1 = __importDefault(require("that-is"));
const copyObject = (obj) => JSON.parse(JSON.stringify(obj));
const objectToString = (obj) => JSON.stringify(obj);
const deepAssign = (dest, src) => {
    Object.keys(src).forEach((key) => {
        const srcValue = src[key];
        if (Object.prototype.hasOwnProperty.call(dest, key)) {
            const destValue = dest[key];
            if (that_is_1.default.isObject(destValue) && that_is_1.default.isObject(srcValue)) {
                deepAssign(destValue, srcValue);
            }
            else {
                dest[key] = srcValue;
            }
        }
        else {
            dest[key] = srcValue;
        }
    });
    return dest;
};
const objectKeysToString = (object) => {
    const strKeys = [];
    const deepIntoKey = (obj, keys) => {
        Object.keys(obj).forEach((key) => {
            if (that_is_1.default.isObject(obj[key])) {
                deepIntoKey(obj[key], keys.concat(`${key}.`));
            }
            else if (that_is_1.default.isArray(obj[key])) {
                deepIntoKey(obj[key], keys.concat(`[${key}]`));
            }
            else {
                strKeys.push(keys.concat(key).join(''));
            }
        });
    };
    deepIntoKey(object, []);
    return strKeys;
};
const deepGetValue = (value, pattern) => {
    if (pattern.length === 0) {
        return value;
    }
    else {
        if (/^\.?\w+/.test(pattern)) {
            const key = (pattern.match(/^\.?(\w+)/) || [])[1];
            return deepGetValue(value[key], pattern.replace(/^\.?\w+/, ''));
        }
        else if (/^\[\d+\]/.test(pattern)) {
            const index = (pattern.match(/^\[(\d)\]/) || [])[1];
            return deepGetValue(value[index], pattern.replace(/^\[\d+\]/, ''));
        }
        else {
            return 'invalid';
        }
    }
};
const objectByKeys = (object, keys) => keys.reduce((t, key) => {
    const value = deepGetValue(object, key);
    t[key] = value;
    return t;
}, {});
const copyDeep = (dest, src) => {
    Object.keys(dest).forEach((key) => {
        if (src[key]) {
            const srcValue = src[key];
            if (that_is_1.default.isObject(srcValue)) {
                dest[key] = copyObject(srcValue);
            }
            else {
                dest[key] = srcValue;
            }
        }
    });
    return dest;
};
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.generateNode = (value) => ({
            value,
            next: null,
        });
        this.isEmpty = () => this.length === 0;
        this.push = (value) => {
            const node = this.generateNode(value);
            if (that_is_1.default.isNull(this.head)) {
                this.head = node;
                this.tail = node;
                this.length++;
            }
            this.tail.next = node;
            this.tail = node;
            this.length++;
        };
        // SOmething will be here
    }
}
const objectToLinkedList = (object) => {
    const list = new LinkedList();
    const rec = (value) => {
        Object.keys(value).forEach((key) => {
            if (that_is_1.default.isObject(value[key])) {
                rec(value[key]);
            }
            else {
                list.push(value[key]);
            }
        });
    };
    rec(object);
    return list;
};
const objectToMap = (object) => {
    const map = new Map();
    const objectKeys = objectKeysToString(object);
    objectKeys.forEach((key) => map.set(key, deepGetValue(object, key)));
    return map;
};
const objectToArray = (object) => {
    const values = [];
    const rec = (obj) => {
        Object.keys(object).forEach((key) => {
            if (that_is_1.default.isObject(obj[key])) {
                objectToArray(obj[key]);
            }
            else {
                values.push(obj[key]);
            }
        });
    };
    rec(object);
    return values;
};
module.exports = {
    deepAssign,
    copyDeep,
    objectByKeys,
    objectKeysToString,
    objectToLinkedList,
    objectToArray,
    objectToMap,
    objectToString,
};
