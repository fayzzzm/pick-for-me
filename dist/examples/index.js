"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("src"));
console.log(src_1.default.stringToRegex('mustafo'));
// /mustafo/ type RegExp
console.log(src_1.default.depthOfArray([1, 2, 3, 4]));
// 1
console.log(src_1.default.nthSquareOfTwo(3));
// 8
