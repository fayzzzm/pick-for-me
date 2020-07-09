"use strict";
// eslint-disable-next-line spaced-comment
/// <reference path="../types/index.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const PickForMe = {};
PickForMe.fieldsByKeys = (object, keys) => Object.keys(object)
    .filter((key) => {
    if (keys.indexOf(key) > -1) {
        return true;
    }
    return false;
})
    .map((key) => object[key]);
PickForMe.depthOfArray = (array) => {
    let max = 1;
    const rec = (t, arr) => {
        const { length } = arr;
        for (let i = 0; i < length; i += 1) {
            if (Array.isArray(arr[i])) {
                rec(t + 1, arr[i]);
            }
            else {
                max = Math.max(max, t);
            }
        }
    };
    rec(0, array);
    return max;
};
PickForMe.nthSquareOfTwo = (n) => 1 << n;
PickForMe.arrayRange = (array, startIndex, endIndex) => {
    const { length } = array;
    return [...array].slice(startIndex || 0, endIndex || length);
};
PickForMe.stringToRegex = (pattern, flags) => {
    const regex = new RegExp(`${pattern}`, (flags || []).join(''));
    return regex;
};
exports.default = PickForMe;
