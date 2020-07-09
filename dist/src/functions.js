"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const that_is_1 = __importDefault(require("that-is"));
const validVariable = (x) => that_is_1.default.isUndefined(x) === false || that_is_1.default.isNull(x) === false;
const partialCall = (callback, a) => (b) => callback(a, b);
const argumentsWithIndex = (c, indexes) => {
    const array = c();
    return indexes.map((index) => array[index]);
};
module.exports = {
    validVariable,
    partialCall,
    argumentsWithIndex,
};
