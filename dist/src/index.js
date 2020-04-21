"use strict";
// eslint-disable-next-line spaced-comment
/// <reference path="../types/index.d.ts" />
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PickForMe = {};
PickForMe.fieldsByKeys = function (object, keys) { return Object.keys(object)
    .filter(function (key) {
    if (keys.indexOf(key) > -1) {
        return true;
    }
    return false;
})
    .map(function (key) { return object[key]; }); };
PickForMe.depthOfArray = function (array) {
    var max = 0;
    var rec = function (t, arr) {
        var length = arr.length;
        for (var i = 0; i < length; i += 1) {
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
PickForMe.nthSquareOfTwo = function (n) { return 1 << n; };
PickForMe.arrayRange = function (array, startIndex, endIndex) {
    var length = array.length;
    return __spreadArrays(array).slice(startIndex || 0, endIndex || length);
};
PickForMe.stringToRegex = function (pattern, flags) {
    var regex = new RegExp("" + pattern, (flags || []).join(''));
    return regex;
};
exports.default = PickForMe;
